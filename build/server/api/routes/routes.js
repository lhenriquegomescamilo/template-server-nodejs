"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/user/routes");
var Routes = (function () {
    function Routes(application) {
        this._initRoutes(application);
        this._router = new routes_1.default();
    }
    Routes.prototype._initRoutes = function (application) {
        application.route('/api/users')
            .get(this._router.index)
            .post(this._router.create);
        application.route('/api/users/:id')
            .get(this._router.findOne)
            .put(this._router.updateOne)
            .delete(this._router.deleteOne);
        application.route('/hello/:name')
            .get(function (req, res) { return res.send("Hello, " + req.params.name); });
    };
    return Routes;
}());
exports.default = Routes;
