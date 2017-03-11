require('module-alias/register');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('routes');

const { env: {SERVER_IP, SERVER_PORT}} = process;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', routes);
app.use((req, res)=>{
    res.status(404);

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(SERVER_PORT, SERVER_IP, ()=> {
    console.log(`Listening on ${SERVER_IP}:${SERVER_PORT}`);
});