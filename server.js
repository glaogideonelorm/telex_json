const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = process.env.PORT || 8000;

// Import integration configuration from integration.js
const integrationConfig = require('./integration');

// Enable CORS for all routes
app.use(cors());

// When a GET request is made to the base URL, send the integration JSON
app.get('/', (req, res) => {
  res.json(integrationConfig);
});
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
