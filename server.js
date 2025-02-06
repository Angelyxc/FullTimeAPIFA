const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Proxy to fetch live results
app.get('/api/results', async (req, res) => {
    try {
        const response = await axios.get(`https://fulltime.thefa.com/client/api/cs1.js`);
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching live results" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

