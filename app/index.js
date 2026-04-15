const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Root route (fix blank page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ GET all transporters (fixed path + error handling)
app.get('/api/transporters', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'public', 'db.json');

        console.log("Reading file:", filePath);

        const data = fs.readFileSync(filePath, 'utf8');
        const db = JSON.parse(data);

        if (!db.transporters) {
            return res.status(500).json({ error: "Invalid DB format" });
        }

        res.json(db.transporters);
    } catch (err) {
        console.error("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// ✅ POST a new bid
app.post('/api/bids', (req, res) => {
    const { from, to, weight } = req.body;

    res.json({
        success: true,
        message: `Bid from ${from} to ${to} posted!`
    });
});

// ✅ Dynamic port for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});