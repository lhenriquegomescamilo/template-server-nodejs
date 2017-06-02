import UserRoutes from '../../modules/user/routes';
import { Application, Request, Response } from 'express';


class Routes {
    private _router: UserRoutes;

    constructor(application: Application) {
        this._initRoutes(application);
        this._router = new UserRoutes();
    }

    private _initRoutes(application: Application): void {
        application.route('/api/users')
            .get(this._router.index)
            .post(this._router.create)

        application.route('/api/users/:id')
            .get(this._router.findOne)
            .put(this._router.updateOne)
            .delete(this._router.deleteOne);

        application.route('/hello/:name')
            .get((req: Request, res: Response) => res.send(`Hello, ${req.params.name}`));

    }
}

export default Routes;