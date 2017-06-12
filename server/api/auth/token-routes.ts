import HttpHandler from '../handler/http-handler';
import UserService from '../../modules/user/user-service';

import { Request, Response, Application } from 'express';
import * as _ from 'lodash';

class TokenRoutes {
    private _userService: UserService;

    constructor() {
        this._userService = new UserService();
    }

    routes(application: Application) {
        application.route('/auth')
            .post((request: Request, response: Response) => this.auth(request, response));
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