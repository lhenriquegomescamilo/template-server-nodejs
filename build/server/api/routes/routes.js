"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = (function () {
    function Routes(application) {
        this._initRoutes(application);
    }
    Routes.prototype._initRoutes = function (application) {
        application.route('/')
            .get(function (req, res) { return res.send('Hello, world!'); });
        application.route('/hello/:name')
            .get(function (req, res) { return res.send("Hello, " + req.params.name); });
    };
    return Routes;
}());
exports.default = Routes;
