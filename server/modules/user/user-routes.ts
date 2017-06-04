import { Request, Response } from 'express';
import UserController from './user-controller';

class UserRoutes {
    private _userController: UserController;

    constructor() {
        this._userController = new UserController();
    }

    index(request: Request, response: Response) {
        return this._userController.findAll(request, response);
    }

    create(request: Request, response: Response) {
        return this._userController.create(request, response);

    }
    findOne(request: Request, response: Response) {
        return this._userController.findById(request, response);
    }
    updateOne(request: Request, response: Response) {
        return this._userController.update(request, response);
    }
    deleteOne(request: Request, response: Response) {
        return this._userController.delete(request, response);
    }
}

export default UserRoutes;