import * as http from 'http';
import Api from './api/api';
import { errorHandlerApi } from './api/error-handler-api';


// Executando funcao de configuracao ao chamar 
const config = require('./config/env/config')();

const server = http.createServer(Api);


Api.use(errorHandlerApi);

server.listen(config.serverPort, () => console.log(`Server are running on port ${config.serverPort}  `));