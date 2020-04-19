#!/usr/bin/env node

const properties = require('./src/utils/properties')
const app = require('./src/services/configurator');
const debug = require('debug')('openemp-api-configurator:server');
const http = require('http');

const port = parseInt(properties.port, 10);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen( port, (error, response) =>{
    console.log('Listening on port ' + server.address().port);
});

server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
    if (error.syscall !== 'listen') throw error;
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = server
