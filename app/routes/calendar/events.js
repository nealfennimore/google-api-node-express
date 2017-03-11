const express = require('express');
const { calendar, auth } = require('google');
const {
    google: {calendarId}
} = require('config');

const router = express.Router();

// GET /calendar/events/list
router.get('/list', (req, res) => {
    calendar.events.list({
        auth,
        calendarId,
        singleEvents: true, // Show all repeating occurences
    }, (err, resp) => {
        res.json(resp);
    });
});

// POST /calendar/events/insert
router.post('/insert', (req, res) => {
    calendar.events.insert({
        auth,
        calendarId,
        resource: req.body,
        sendNotifications: true
    }, (err, resp) => {
        res.json(resp);
    });
});

module.exports =  router;