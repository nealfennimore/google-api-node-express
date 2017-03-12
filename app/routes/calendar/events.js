const express = require('express');
const { calendar, auth } = require('google');
const authenticate = require('auth');
const calendarId = process.env.GOOGLE_CALENDAR_ID;

const router = express.Router();

router.use(authenticate);

// GET /calendar/events/list
router.get('/list', (req, res) => {
    calendar.events.list(
        Object.assign(
            {
                auth,
                calendarId,
                singleEvents: true // Show all repeating occurences
            },
            req.query
        ),
        (err, resp) => {
            res.json(resp);
        }
    );
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