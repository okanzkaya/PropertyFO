const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const auth = require('../middleware/auth');
require('dotenv').config();

// Register Tenant
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const tenant = await Tenant.create({ name, email, password: hashedPassword });
        res.status(201).json(tenant);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login Tenant
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const tenant = await Tenant.findOne({ where: { email } });
        if (!tenant) return res.status(400).json({ error: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, tenant.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

        const token = jwt.sign({ id: tenant.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Send Invitation
router.post('/invite', auth, async (req, res) => {
    const { email } = req.body;

    try {
        // Setup email transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Invitation to join PropertyFO',
            text: 'You are invited to join PropertyFO. Click the link to register.'
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Invitation sent' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send invitation' });
    }
});

module.exports = router;
