const fs = require('fs');
const express = require('express');

const app = express();
const port = 8000;

let users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

// a. Display details of all users
app.get('/api/v1/users', (req, res) => {
    res.json(users);
});

// b. Display details based on its parameters such as id
app.get('/api/v1/users/:id', (req, res) => {
    let id = req.params.id * 1;
    const find_user = users.find(el => el.id === id);
    if (!find_user) {
        return res.status(404).json({
            status: "FAILED",
            message: "could not find the user"
        });
    }
    res.status(200).json(find_user);
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
