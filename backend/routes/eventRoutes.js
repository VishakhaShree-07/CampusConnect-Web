const express = require('express');
const router = express.Router();
const { getEvents, createEvent, deleteEvent, registerForEvent, getMyEvents } = require('../controllers/eventController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getEvents)
    .post(protect, admin, createEvent);

router.route('/myevents')
    .get(protect, getMyEvents);

router.route('/:id')
    .delete(protect, admin, deleteEvent);

router.route('/:id/register')
    .post(protect, registerForEvent);

module.exports = router;
