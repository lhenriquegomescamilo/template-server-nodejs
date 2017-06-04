import UserRoutes from '../../modules/user/user-routes';
import { Application, Request, Response } from 'express';


class Routes {
    private _router: UserRoutes;

    constructor(application: Application) {
        this._router = new UserRoutes();
        this._initRoutes(application);
    }

    private _initRoutes(application: Application): void {
        application.route('/api/users')
            .get(this._router.index)
            .post(this._router.create)

        application.route('/api/users/:id')
            .get(this._router.findOne)
            .put(this._router.updateOne)
            .delete(this._router.deleteOne);

    }
}

export default Routes;