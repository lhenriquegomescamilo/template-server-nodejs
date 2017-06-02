"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this._router(this.express);
    };
    Api.prototype._router = function (application) {
        console.log('calling router');
        new routes_1.default(application);
    };
    return Api;
}());
exports.default = new Api().express;
