import TokenRoutes from '../auth/token-routes';

import AuthConfig from '../../auth-config';
import UserRoutes from '../../modules/user/user-routes';
import { Application, Request, Response } from 'express';


class Routes {
    private _userRouter: UserRoutes;
    private _tokenRoute: TokenRoutes;
    private _auth: AuthConfig;

    constructor(application: Application, auth: AuthConfig) {
        this._userRouter = new UserRoutes();
        this._tokenRoute = new TokenRoutes();
        this._auth = auth;
        this._initRoutes(application);
    }

    private _initRoutes(application: Application): void {
        this._userRouter.routes(application, this._auth);
        this._tokenRoute.routes(application);

        

    }

}

export default Routes;