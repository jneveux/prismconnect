"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jean on 7/16/17.
 */
const http = require("http");
const debug = require("debug");
const App_1 = require("./App");
debug('ts-express:server');
// process.env.PORT
const port = normalizePort(process.env['PORT'] || 3000);
App_1.default.set('port', port);
const server = http.createServer(App_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    const portNormalized = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(portNormalized)) {
        return val;
    }
    else if (portNormalized >= 0) {
        return portNormalized;
    }
    else {
        return false;
    }
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
