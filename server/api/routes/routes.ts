import TokenRoutes from '../auth/token-routes';

import AuthConfig from '../../auth-config';
import UserRoutes from '../../modules/user/user-routes';
import { Application, Request, Response } from 'express';


class Routes {
    private _router: UserRoutes;
    private _tokenRoute: TokenRoutes;
    private _auth: AuthConfig;

    constructor(application: Application, auth: AuthConfig) {
        this._router = new UserRoutes();
        this._tokenRoute = new TokenRoutes();
        this._auth = auth;
        this._initRoutes(application);
    }

    private _initRoutes(application: Application): void {
        application.route('/api/users')
            .all(this._auth.authenticate())
            .get((request: Request, response: Response) => this._router.index(request, response))
            .post((request: Request, response: Response) => this._router.create(request, response));

        application.route('/api/users/:id')
            .all(this._auth.authenticate())
            .get((request: Request, response: Response) => this._router.findOne(request, response))
            .put((request: Request, response: Response) => this._router.updateOne(request, response))
            .delete((request: Request, response: Response) => this._router.deleteOne(request, response));

        application.route('/auth')
            .post((request: Request, response: Response) => this._tokenRoute.auth(request, response));

    }
}

export default Routes;