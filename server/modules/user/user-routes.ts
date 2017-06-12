import AuthConfig from '../../auth-config';
import { Application, Request, Response } from 'express';
import UserController from './user-controller';

let _userController: UserController;
class UserRoutes {


    constructor() {
        _userController = new UserController();
    }

    routes(application: Application, auth: AuthConfig) {
        application.route('/api/users')
            .all(auth.authenticate())
            .get((request: Request, response: Response) => this.index(request, response))
            .post((request: Request, response: Response) => this.create(request, response));

        application.route('/api/users/:id')
            .all(auth.authenticate())
            .get((request: Request, response: Response) => this.findOne(request, response))
            .put((request: Request, response: Response) => this.updateOne(request, response))
            .delete((request: Request, response: Response) => this.deleteOne(request, response));
    }

    index(request: Request, response: Response) {
        _userController.findAll(request, response);
    }

    create(request: Request, response: Response) {
        _userController.create(request, response);

    }

    findOne(request: Request, response: Response) {
        _userController.findById(request, response);
    }

    updateOne(request: Request, response: Response) {
        _userController.update(request, response);
    }

    deleteOne(request: Request, response: Response) {
        _userController.delete(request, response);
    }
}

export default UserRoutes;