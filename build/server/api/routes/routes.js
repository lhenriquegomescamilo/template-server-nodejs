"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = require("../../modules/user/user-routes");
var Routes = (function () {
    function Routes(application) {
        this._router = new user_routes_1.default();
        this._initRoutes(application);
    }
    Routes.prototype._initRoutes = function (application) {
        application.route('/api/users')
            .get(this._router.index)
            .post(this._router.create);
        application.route('/api/users/:id')
            .get(this._router.findOne)
            .put(this._router.updateOne)
            .delete(this._router.deleteOne);
    };
    return Routes;
}());
exports.default = Routes;
