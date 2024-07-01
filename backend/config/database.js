require('dotenv').config();
const { Sequelize } = require('sequelize');

// Construct the DATABASE_URL from individual environment variables
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const databaseUrl = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'mysql',
  logging: false,
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
