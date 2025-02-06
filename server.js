const express = require('express');  // Import express
const app = express();  // Create an express app

// Simple route to respond with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;  // Use port 3000 or the environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
