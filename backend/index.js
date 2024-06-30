const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const users = require('./routes/users');
const properties = require('./routes/properties');
const tenants = require('./routes/tenants');
const tickets = require('./routes/tickets');
const documents = require('./routes/documents');
const payments = require('./routes/payments');
const subscriptions = require('./routes/subscriptions');
const sequelize = require('./config/database');

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
app.use('/api/users', users);
app.use('/api/properties', properties);
app.use('/api/tenants', tenants);
app.use('/api/tickets', tickets);
app.use('/api/documents', documents);
app.use('/api/payments', payments);
app.use('/api/subscriptions', subscriptions);

// Database connection
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
