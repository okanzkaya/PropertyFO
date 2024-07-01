const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const sequelize = require('./config/database');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api', routes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Anything that doesn't match the above routes, send back index.html from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

// Root URL route
app.get('/', (req, res) => {
  res.send('Welcome to the Property Management API');
});

// Database connection
sequelize.connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
