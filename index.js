const express = require('express');
const { M3u8Proxy } = require('./logic/proxy');
const app = express();

// Middleware to parse JSON query params
app.use(express.json());


// Define routes
app.options('/proxy', (req, res) => {
    // Handle OPTIONS request for CORS preflight
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();  // Respond with no content
});

app.get('/proxy', (req, res) => {
    M3u8Proxy(req, res);
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start server
const PORT = 3020;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
