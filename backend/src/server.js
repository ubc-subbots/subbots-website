const http = require('http');
const express = require('express');
const router = require(__dirname + '/router.js');
const bodyParser = require('body-parser');

const HOSTNAME = '0.0.0.0';
const HTTP_PORT = 80;

const app = express();
app.use(bodyParser.json());
app.use(router);

const httpServer = http.createServer(app);

httpServer.listen(HTTP_PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${HTTP_PORT}/`);
});
