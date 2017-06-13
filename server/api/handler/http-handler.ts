import { callback } from 'testdouble';
import { Request, Response } from 'express';
import * as jwt from 'jwt-simple';
import * as HttpStatus from 'http-status';
import * as _ from 'lodash';
import * as bcrypt from 'bcryptjs';

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
        const isMatch = bcrypt.compareSync(credentialFromUser.password, userFromDb.password);
        if (isMatch) {
            const payload = { id: userFromDb.id };
            let objectToResponse = { token: jwt.encode(payload, config.secret) };
            response
                .status(HttpStatus.OK)
                .json(objectToResponse)
                .end()
        } else {
            response.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    }
    static authFail(response: Response, error) {
        response.sendStatus(HttpStatus.UNAUTHORIZED).end();
    }
}
export default HttpHandler;