import { Application, Request, Response } from 'express';


class Routes {
    constructor(application: Application) {
        this._initRoutes(application);
    }

    private _initRoutes(application: Application): void {
        application.route('/')
            .get((req: Request, res: Response) => res.send('Hello, world!'));

        application.route('/hello/:name')
            .get((req: Request, res: Response) => res.send(`Hello, ${req.params.name}`));

    }
}

export default Routes;