// Import required modules
const express = require("express");
require("dotenv").config();

// Initialize the Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Express App!");
});

// Set the port from the environment or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
