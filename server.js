/**
   hey/server.js
   ====================================================
   CREATED: 2018-07-01
   AUTHOR: wlharvey4
   MODIFIED: 2018-07-01
   VERSION: 0.0.1
   ABOUT: Main http server file
   NOTES:
   CHANGE-LOG:
   0.0.1: Initial commit
   ----------------------------------------------------
 */

const http = require('http');
const app = require('./app');
const bunyan = require('bunyan');

const serverLogger = bunyan.createLogger({name: 'hey-server'});
serverLogger.info("Starting...");

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
