const express = require('express');
const userRoutes = require('../routes/userRoutes');  // Import routes

const app = express();

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api/users', userRoutes);  // Use userRoutes for '/api/users'

module.exports = app;  // Export app
