// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const usersRoute = require('./routes/users');
// Import other routes here

// Route Middlewares
app.use('/api/users', usersRoute);
// Add other route middlewares here

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to PropertyFO API Test 3');
});

// Sync Database and Start Server
sequelize.sync().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
