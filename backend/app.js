const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Route
const mainRoutes = require("./routes/index");
app.use("/", mainRoutes);

module.exports = app;
