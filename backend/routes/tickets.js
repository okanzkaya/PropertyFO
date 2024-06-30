const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const auth = require('../middleware/auth');

// Create Ticket
router.post('/', auth, async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body);
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get All Tickets
router.get('/', auth, async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
