const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, client-side JS, etc.)
app.use(express.static(path.join(__dirname, 'Develop', 'public')));

// Use HTML routes
app.use('/', htmlRoutes);

// Use API routes
app.use('/', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});