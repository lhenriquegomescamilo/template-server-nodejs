import TokenRoutes from '../../modules/auth/auth';
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
            .get(this._router.index)
            .post(this._router.create)

        application.route('/api/users/:id')
            .all(this._auth.authenticate())
            .get(this._router.findOne)
            .put(this._router.updateOne)
            .delete(this._router.deleteOne);

        application.route('/auth')
            .post(this._tokenRoute.auth);

    }
}

export default Routes;