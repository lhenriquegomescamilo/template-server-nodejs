"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./user-controller");
var UserRoutes = (function () {
    function UserRoutes() {
        this._userController = new user_controller_1.default();
    }
    UserRoutes.prototype.index = function (request, response) {
        return this._userController.findAll(request, response);
    };
    UserRoutes.prototype.create = function (request, response) {
        return this._userController.create(request, response);
    };
    UserRoutes.prototype.findOne = function (request, response) {
        return this._userController.findById(request, response);
    };
    UserRoutes.prototype.updateOne = function (request, response) {
        return this._userController.update(request, response);
    };
    UserRoutes.prototype.deleteOne = function (request, response) {
        return this._userController.delete(request, response);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
