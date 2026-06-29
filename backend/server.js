
// This is my first backend server
// It listens for requests and sends responses

const express = require('express');
const app = express();
const port = 3000;

// This runs when someone visits /api
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from my backend!',
    status: 'working',
    time: new Date().toISOString()
  });
});

// This runs when someone visits /health
// Health checks are used to see if the server is alive
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime()
  });
});

// This runs when someone visits the home page
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to my backend API!' 
  });
});

// Start the server
app.listen(port, () => {
  console.log('Backend server is running on port ' + port);
});

