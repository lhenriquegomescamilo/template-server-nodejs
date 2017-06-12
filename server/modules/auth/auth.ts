import { Request, Response } from 'express';
import * as _ from 'lodash';

import UserService from '../user/user-service';
import HttpHandler from '../../api/handler/http-handler';


class TokenRoutes {
    private _userService: UserService;

    constructor() {
        this._userService = new UserService();
    }

    auth(request: Request, response: Response) {
        const credentials = {
            email: request.body.email,
            password: request.body.password
        };
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            this._userService.findByEmail(credentials.email)
                .then(_.partial(HttpHandler.authSuccess, response, credentials))
                .catch(_.partial(HttpHandler.authFail, response))
        }
    }
}
export default TokenRoutes;