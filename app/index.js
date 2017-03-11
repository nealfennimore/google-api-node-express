require('module-alias/register');

const express = require('express');
const routes = require('routes');
const { server } = require('config');

const app = express();

app.use('/', routes);

app.listen(server.port, server.ip, ()=> {
    console.log(`Listening on ${server.ip}:${server.port}`);
});