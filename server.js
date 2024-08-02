const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

// POST /bfhl route
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: "Invalid input" });
    }
    
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? alphabets.sort((a, b) => b.localeCompare(a))[0] : [];

    res.json({
        is_success: true,
        user_id: "sanjana_lakkimsetty_26092004",
        email: "sanjana_l@srmap.edu.in",
        roll_number: "AP21110010685",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet ? [highestAlphabet] : []
    });
});

// GET /bfhl route
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
