const getEnv = require('getenv');
const express = require('express');
const bodyParser = require('body-parser');
const esClient = require('node-eventstore-client');
const uuid = require('uuid/v4');


// Environments
const PORT = getEnv('PORT', 8080);
const ES_CONNECTION = getEnv('ES_CONNECTION', 'tcp://localhost:1113');

// Default settings enabled
const esConnectionSettings = {};

const getEventStoreConnection = async () => {
    const esConnection = esClient.createConnection(connSettings, ES_CONNECTION);
    
    await esConnection.connect();
    console.log(`Connected to eventstore at ${tcpEndPoint.host} ${tcpEndPoint.port}`);

    return esConnection;
}

const getHttpServer = (connection) => {
    const app = express();
    app.use(bodyParser.json());

    /**
     * Send a request, e.g.:
     * POST localhost:8080/createDriver
     * Payload { ... }
     */
    app.post('/createDriver', function (req, res) {
        // req.body is the payload { ... } 
        // Put your logic here
        // e.g. do sth with the connection ;-)
    });

    app.listen(PORT, function () {
        console.log(`Example app listening on port ${PORT}!`);
    });

    return app;
}

// Entrypoint
const main = async () => {
    const connection = await getEventStoreConnection()
    const server = await getHttpServer(connection);
    
    connection.on('error', console.error);
    server.on('error', console.error);

    // TODO exit process on error
};

main();