import AuthConfig from '../auth-config';
import { errorHandlerApi } from './error-handler-api';
import Routes from './routes/routes';
import * as express from 'express';
import { Application } from "express";
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';


class Api {
    public express: Application;

    private _authConfig: AuthConfig;

    constructor() {
        this.express = express();
        this._authConfig = new AuthConfig();
        this._middleware()
    }

    private _middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi);
        this.express.use(this._authConfig.initialize())
        this._router(this.express, this._authConfig);
    }

    private _router(application: Application, auth: any ): void {
        new Routes(application, auth);
    }
}
export default new Api().express;