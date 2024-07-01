// backend/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql', // Ensure this matches your database type
  logging: false, // Disable logging for performance improvement
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

module.exports = sequelize;
module.exports.connectDB = connectDB;
