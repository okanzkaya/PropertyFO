// backend/models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subscriptionStatus: {
    type: DataTypes.STRING,
    defaultValue: 'inactive'
  },
  subscriptionPlan: {
    type: DataTypes.STRING
  },
  subscriptionEndDate: {
    type: DataTypes.DATE
  },
  propertiesCreated: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  ticketsCreated: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = User;
