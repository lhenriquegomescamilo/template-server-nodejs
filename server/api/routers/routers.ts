import { Application } from 'express';


class Routers {
    constructor(application: Application) {

    }

    initRoutes(application: Application): void {
        application.route('/')
            .get((req, res) => res.send('Hello word'));
    }
}