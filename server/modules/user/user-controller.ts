import { Request, Response } from 'express';

class UserController {
    constructor() { }

    findAll(request: Request, response: Response) {
        response.status(200).json({
            message: 'Response Success'
        });
    }
    create(request: Request, response: Response) {
        response.status(200).json({
            message: 'Response Success'
        });
    }

    findById(request: Request, response: Response) {
        response.status(200).json({
            message: 'Response Success'
        });
    }
    update(request: Request, response: Response) {
        response.status(200).json({
            message: 'Response Success'
        });
    }
    delete(request: Request, response: Response) {
        response.status(200).json({
            message: 'Response Success'
        });
    }
}

export default UserController;