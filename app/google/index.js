const google = require('googleapis');
const config = require('config');
const key = require('./key.json');

const client = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    config.google.scopes,
    null
);

client.authorize(function(err, tokens) {
    if (err) {
        console.log(err);
        return;
    }
});

module.exports = {
    client,
    auth: client,
    calendar: google.calendar('v3')
};