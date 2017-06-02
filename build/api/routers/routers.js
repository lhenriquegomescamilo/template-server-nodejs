"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routers = (function () {
    function Routers(application) {
        this._initRoutes(application);
    }
    Routers.prototype._initRoutes = function (application) {
        application.route('/')
            .get(function (req, res) { return res.send('Hello word'); });
        application.route('hello/:name')
            .get(function (req, res) { return res.send("Hello, " + req.params.name); });
    };
    return Routers;
}());
exports.default = Routers;
