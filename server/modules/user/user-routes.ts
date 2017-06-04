import { Request, Response } from 'express';
import UserController from './user-controller';

let _userController: UserController;
class UserRoutes {


    constructor() {
        _userController = new UserController();
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