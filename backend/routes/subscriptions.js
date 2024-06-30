const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// Subscription status update
router.post('/status', auth, async (req, res) => {
  try {
    const { userId, status } = req.body;
    const user = await User.findByPk(userId);

    if (!user) return res.status(404).send('User not found');

    user.subscriptionStatus = status;

    await user.save();
    res.status(200).send('Subscription status updated successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
