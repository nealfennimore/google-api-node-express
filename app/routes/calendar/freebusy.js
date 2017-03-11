const express = require('express');
const { calendar, auth } = require('google');
const {
    google: {calendarId}
} = require('config');

const router = express.Router();

// POST /calendar/freebusy/query
router.post('/query', (req, res) => {

    const resource = Object.assign({}, req.body, {
        items: [{
            id: calendarId
        }]
    });

    calendar.freebusy.query({
        auth,
        resource
    }, (err, resp) => {
        res.json(resp);
    });
});

module.exports =  router;