// index.js
const express = require('express');
const app = express();
const port = process.env.PORT;

// Simple route that responds with 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route to show how we can handle different paths
app.get('/about', (req, res) => {
  res.send('This is the About page!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
