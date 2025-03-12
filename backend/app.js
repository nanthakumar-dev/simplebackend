const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page.");
});

app.post("/contact", (req, res) => {
    res.send(`Message received: ${req.body.message}`);
});

// Additional routes (example)
app.get("/products", (req, res) => {
    res.json([{ id: 1, name: "Product A" }, { id: 2, name: "Product B" }]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
