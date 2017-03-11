const express = require('express');
const events = require('./events');
const freebusy = require('./freebusy');

const router = express.Router();

router.use('/events', events);
router.use('/freebusy', freebusy);

module.exports = router;