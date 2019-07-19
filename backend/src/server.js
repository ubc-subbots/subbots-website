const http = require('http');
const express = require('express');
const path = require('path');

const HOSTNAME = '0.0.0.0';
const HTTP_PORT = 80;

const app = express();

//Nessesary for react-app build (see https://facebook.github.io/create-react-app/docs/deployment)
app.use(express.static(path.join(__dirname, '../../frontend/build')))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

const httpServer = http.createServer(app);

httpServer.listen(HTTP_PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${HTTP_PORT}/`);
});
