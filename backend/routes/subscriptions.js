const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Joi = require('joi');

// Define schema for subscription creation
const subscriptionSchema = Joi.object({
  userId: Joi.string().required(),
  plan: Joi.string().required(),
  status: Joi.string().default('active'),
  endDate: Joi.date().required()
});

// Create Subscription Route
router.post('/', async (req, res) => {
  const { error } = subscriptionSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const { userId, plan, status, endDate } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).send('User not found');

    user.subscriptionPlan = plan;
    user.subscriptionStatus = status;
    user.subscriptionEndDate = endDate;

    await user.save();
    res.status(200).send('Subscription created successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// List Subscription Plans Route
router.get('/plans', (req, res) => {
  const plans = [
    { name: 'Basic', cost: 10, propertyLimit: 5, ticketLimit: 10 },
    { name: 'Premium', cost: 20, propertyLimit: 10, ticketLimit: 20 },
    { name: 'Enterprise', cost: 50, propertyLimit: 50, ticketLimit: 100 }
  ];

  res.status(200).json(plans);
});

// Update Subscription Status Route
const statusSchema = Joi.object({
  userId: Joi.string().required(),
  status: Joi.string().required()
});

router.patch('/status', async (req, res) => {
  const { error } = statusSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const { userId, status } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).send('User not found');

    user.subscriptionStatus = status;

    await user.save();
    res.status(200).send('Subscription status updated successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
