import { callback } from 'testdouble';
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status';
class HttpHandler {
    constructor() {
        throw new Error('HttpHandler cannot be instantiate');
    }

    static defaultResponse(request: Request, response: Response, callback: Function) {
        callback()
            .then(data => response.status(HttpStatus.OK).json({ payload: data }))
            .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: error }))
    }

}

export default HttpHandler;