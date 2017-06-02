"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(error, req, res, next) {
    console.error("API ERROR HANDLER EXEC " + error);
    res
        .status(500)
        .json({
        errorCode: 'ERROR-001',
        message: 'Internal Error',
        detailError: error
    });
}
exports.errorHandlerApi = errorHandlerApi;
