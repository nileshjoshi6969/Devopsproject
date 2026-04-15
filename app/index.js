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
        const db = JSON.parse(
            fs.readFileSync(path.join(__dirname, 'public', 'db.json'), 'utf8')
        );
        res.json(db.transporters);
    } catch (err) {
        res.status(500).json({ error: "Failed to load transporters" });
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