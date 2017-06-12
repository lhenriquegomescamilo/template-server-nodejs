import * as http from 'http';
import Api from './api/api';

// Importando o arquivo index em modelo
const models = require('./models');

// Executando funcao de configuracao ao chamar 
const config = require('./config/env/config')();

const server = http.createServer(Api);

models
    .sequelize
    .sync()
    .then(() => {
        server.listen(config.serverPort);
        server.on('listening', () => console.log(`Server are running on port ${config.serverPort}`));
        server.on('error', (error: NodeJS.ErrnoException) => console.log(`Occurred a erro ${error.message}`));
    })
    .catch(error => console.log(`Error ocurred on database ${error}`));

// Api.use(errorHandlerApi);


