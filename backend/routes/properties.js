const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const Joi = require('joi');
const auth = require('../middleware/auth');

// Validation schema
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  address: Joi.string().min(3).required(),
  description: Joi.string().optional(),
  price: Joi.number().required()
});

// Create Property
router.post('/', auth, async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const property = new Property(req.body);
    await property.save();
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Get All Properties
router.get('/', auth, async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
