const google = require('googleapis');

const {
    env: {
        GOOGLE_AUTH_CLIENT_EMAIL,
        GOOGLE_AUTH_PRIVATE_KEY,
        GOOGLE_API_SCOPES
    }
} = process;

const client = new google.auth.JWT(
    GOOGLE_AUTH_CLIENT_EMAIL,
    null,
    GOOGLE_AUTH_PRIVATE_KEY,
    GOOGLE_API_SCOPES.split(','),
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