import * as passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import UserService from './modules/user/user-service';
import * as _ from 'lodash';
const config = require('./config/env/config')();

class AuthConfig {
    private _userService: UserService;
    private _options: any;

    constructor() {
        this._userService = new UserService();
        this._options = {
            secretOrKey: config.secret,
            jwtFromRequest: ExtractJwt.fromAuthHeader()
        };
        
        this._configStrategyPassport(passport);
    }

    _configStrategyPassport(passport) {
        passport.use(new Strategy(this._options, (jwtPayload, done) => {
            this._userService
                .findById(jwtPayload.id)
                .then(user => {
                    if (!_.isEmpty(user)) {
                        return done(null, {
                            id: user.id,
                            email: user.email
                        });
                    }
                    return done(null, false);
                })
                .catch(error => done(error, null));
        }))
    }

    initialize() {
        return passport.initialize();
    }
    authenticate() {
        return passport.authenticate('jwt', { session: false });
    }
}
export default AuthConfig;