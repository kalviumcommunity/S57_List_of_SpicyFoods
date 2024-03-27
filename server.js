const express = require('express');
const { connectDb, checkConnected } = require('./db'); // Adjust the path as necessary

const app = express();

// Connect to MongoDB at startup
connectDb().then(() => console.log("Database connection established successfully"));

// Route to check MongoDB connection status
app.get('/connect', (req, res) => {
  const isConnected = checkConnected();
  if (isConnected) {
    res.send('Database is connected');
  } else {
    res.send('Database is not connected');
  }
});

// Example routes
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/', (req, res) => {
  res.send('Hello World to the API!');
});

// Start the server
app.listen(3000, () => {
  console.log('Node API is running on port 3000');
});
