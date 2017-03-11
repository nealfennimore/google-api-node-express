const express = require('express');
const calendar = require('./calendar');

const router = express.Router();

router.use('/calendar', calendar);

module.exports = router;