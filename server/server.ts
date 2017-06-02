import * as http from 'http';
import Api from './api/api';

// Executando funcao de configuracao ao chamar 
const config = require('./config/env/config')();

const server = http.createServer(Api);


// Api.use(errorHandlerApi);

server.listen(config.serverPort);

server.on('listening', () => console.log(`Server are running on port ${config.serverPort}`));
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocurred a erro ${error.message}`));
