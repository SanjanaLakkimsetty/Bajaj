const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    let numbers = [];
    let alphabets = [];
    let highestAlphabet = [];

 
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });
    const sortedAlphabets = alphabets.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    highestAlphabet = sortedAlphabets.length > 0 ? [sortedAlphabets[sortedAlphabets.length - 1]] : [];

    
    res.json({
        is_success: true,
        user_id: "sanjana_lakkimsetty_26092004",  
        email: "sanjana_l@srmap.edu.in",        
        roll_number: "AP21110010685",       
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
