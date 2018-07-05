/**
   hey/server.js
   ====================================================
   CREATED: 2018-07-01
   UPDATED: 2018-07-01
   VERSION: v0.0.1
   AUTHOR: wlharvey4
   ABOUT: Main http server file
   NOTES:
   CHANGE-LOG:
   v0.0.1: initial commit
   ----------------------------------------------------
 */

const http   = require('http');
const bunyan = require('bunyan');
const app    = require('./app');

const serverLogger = bunyan.createLogger({name: 'hey-server'});
serverLogger.info("Starting server...");
serverLogger.info(`Server will be using port ${process.env.PORT}...`);

const PORT = process.env.PORT;

if (!PORT) {
  serverLogger.error('PORT is undefined');
  process.exit();
}
const server = http.createServer(app).listen(PORT);
if (server.listening) {
  serverLogger.info(`Server is listening on port ${PORT}`);
} else {
  serverLogger.error('Server is not listening');
  process.exit();
}
