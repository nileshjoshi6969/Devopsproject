const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET all transporters
app.get('/api/transporters', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
  res.json(db.transporters);
});

// POST a new bid
app.post('/api/bids', (req, res) => {
  const { from, to, weight } = req.body;
  res.json({ success: true, message: `Bid from ${from} to ${to} posted!` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));