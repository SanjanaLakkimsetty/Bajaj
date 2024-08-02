const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    let numbers = [];
    let alphabets = [];
    let highest_alphabet = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });

    const sortedAlphabets = alphabets.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    const highestAlphabet = sortedAlphabets.length > 0 ? [sortedAlphabets[sortedAlphabets.length - 1]] : [];

    res.json({
        is_success: true,
        user_id: "sanjana_lakkimsetty",
        email: "sanjana_l@srmap.edu.in",
        roll_number: "AP21110010685",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
