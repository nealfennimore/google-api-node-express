require('module-alias/register');

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('routes');
const { server } = require('config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(server.port, server.ip, ()=> {
    console.log(`Listening on ${server.ip}:${server.port}`);
});