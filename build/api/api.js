"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_handler_api_1 = require("./error-handler-api");
var routes_1 = require("./routes/routes");
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var Api = (function () {
    function Api() {
        this.express = express();
        this._middleware();
    }
    Api.prototype._middleware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(error_handler_api_1.errorHandlerApi);
        this._router(this.express);
    };
    Api.prototype._router = function (application) {
        new routes_1.default(application);
    };
    return Api;
}());
exports.default = new Api().express;
