import { callback } from 'testdouble';
import { Request, Response } from 'express';
import * as jwt from 'jwt-simple';
import * as HttpStatus from 'http-status';
import * as _ from 'lodash';
const config = require('../../config/env/config')();

class HttpHandler {
    constructor() {
        throw new Error('HttpHandler cannot be instantiate');
    }

    static defaultResponse(request: Request, response: Response, callback: Function) {
        callback()
            .then(data => response.status(HttpStatus.OK).json({ payload: data }))
            .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: error }))
    }

    static authSuccess(response: Response, credentialFromUser: any, userFromDb: any) {
        const isMatch: Boolean = _.isEqual(credentialFromUser.password, userFromDb.passowrd);
        if (isMatch) {
            const payload = { id: userFromDb.id };
            response
                .status(HttpStatus.OK)
                .json({ token: jwt.enconde(payload, config.secret) })
        } else {
            response.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    }
    static authFail(response: Response) {
        response.sendStatus(HttpStatus.UNAUTHORIZED);
    }
}
export default HttpHandler;