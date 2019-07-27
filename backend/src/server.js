require('dotenv').config();

const mongodb = require("./mongodb.js");

mongodb.connectDB( err => {
  if (!err){
    console.log("Connected to MongoDB");

    const http = require('http');
    const express = require('express');
    const router = require(__dirname + '/router.js');
    const bodyParser = require('body-parser');
    
    const HOSTNAME = process.env.HOSTNAME;
    const HTTP_PORT = process.env.HTTP_PORT;
    
    const app = express();
    app.use(bodyParser.json());
    app.use(router);
    
    const httpServer = http.createServer(app);
    
    httpServer.listen(HTTP_PORT, HOSTNAME, () => {
      console.log(`Server running at http://${HOSTNAME}:${HTTP_PORT}/`);
    });
    
  }
});
