import { Request, Response } from 'express';
import UserService from './user-service';
import * as HttpStatus from 'http-status';
import * as _ from 'lodash';
class UserController {
    private _userService: UserService;
    constructor() {
        this._userService = new UserService;
    }

    findAll(request: Request, response: Response) {

        // this._defaultResponse(request, response, () => this._userService.findAll());

        this._userService.findAll()
            .then(users => response.status(HttpStatus.OK).json({ payload: users }))
            .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: error }))

    }

    private _defaultResponse(request: Request, response: Response, callback: Function) {
        callback()
            .then(users => response.status(HttpStatus.OK).json({ payload: users }))
            .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: error }))
    }

    create(request: Request, response: Response) {
        this._userService.create(request.body)
            .then(userCreated => response.status(HttpStatus.OK).json({ payload: userCreated }))
            .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: error }));
    }

    findById(request: Request, response: Response) {
        const userId = parseInt(request.params.id);
        this._userService.findById(userId)
            .then(user => response.status(HttpStatus.OK).json({ payload: user }))
            .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: error }));
    }

    update(request: Request, response: Response) {
        const userId = parseInt(request.params.id);
        const userToUpdate = request.body;
        this._defaultResponse(request, response, () => this._userService.updateById(userId, userToUpdate));
    }
    delete(request: Request, response: Response) {
        const userId = request.params.id;
        this._defaultResponse(request, response, () => this._userService.removeById(userId))
    }
}

export default UserController;