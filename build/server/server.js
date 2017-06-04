"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
// Importando o arquivo index em modelo
var models = require('./models');
// Executando funcao de configuracao ao chamar 
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
models
    .sequelize
    .sync()
    .then(function () {
    server.listen(config.serverPort);
    server.on('listening', function () { return console.log("Server are running on port " + config.serverPort); });
    server.on('error', function (error) { return console.log("Occurred a erro " + error.message); });
})
    .catch(function (error) { return console.log("Error ocurred on database " + error); });
// Api.use(errorHandlerApi);
