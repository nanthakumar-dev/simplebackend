const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const mainRoutes = require("./routes/index");
app.use("/", mainRoutes);

module.exports = app;
