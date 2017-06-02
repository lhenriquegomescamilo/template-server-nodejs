"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routers = (function () {
    function Routers(application) {
    }
    Routers.prototype.initRoutes = function (application) {
        application.route('/')
            .get(function (req, res) { return res.send('Hello word'); });
    };
    return Routers;
}());
