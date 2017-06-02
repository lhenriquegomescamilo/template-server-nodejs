"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var error_handler_api_1 = require("./api/error-handler-api");
// Executando funcao de configuracao ao chamar 
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
api_1.default.use(error_handler_api_1.errorHandlerApi);
server.listen(config.serverPort, function () { return console.log("Server are running on port " + config.serverPort + "  "); });
