import { Request, Response } from 'express';
import UserService from './user-service';
import HttpHandler from '../../api/handler/http-handler';

import * as HttpStatus from 'http-status';
import * as _ from 'lodash';
class UserController {
    private _userService: UserService;
    constructor() {
        this._userService = new UserService;
    }

    findAll(request: Request, response: Response) {
        HttpHandler.defaultResponse(request, response, () => this._userService.findAll());
    }


    create(request: Request, response: Response) {
        HttpHandler.defaultResponse(request, response, () => this._userService.create(request.body))
    }

    findById(request: Request, response: Response) {
        const userId = parseInt(request.params.id);
        HttpHandler.defaultResponse(request, response, () => this._userService.findById(userId));
    }

    update(request: Request, response: Response) {
        const userId = parseInt(request.params.id);
        const userToUpdate = request.body;
        HttpHandler.defaultResponse(request, response, () => this._userService.updateById(userId, userToUpdate));
    }
    delete(request: Request, response: Response) {
        const userId = request.params.id;
        HttpHandler.defaultResponse(request, response, () => this._userService.removeById(userId))
    }
}

export default UserController;