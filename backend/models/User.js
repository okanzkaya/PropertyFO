const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subscriptionStatus: { type: String, default: 'inactive' },
  subscriptionPlan: { type: String },
  subscriptionEndDate: { type: Date },
  propertiesCreated: { type: Number, default: 0 },
  ticketsCreated: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);
