import { errorHandlerApi } from './error-handler-api';
import Routes from './routes/routes';
import * as express from 'express';
import { Application } from "express";
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';



class Api {
    public express: Application;

    constructor() {
        this.express = express();
        this._middleware()
    }

    private _middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi)
        this._router(this.express);
    }

    private _router(application: Application): void {
        new Routes(application);
    }


}
export default new Api().express;