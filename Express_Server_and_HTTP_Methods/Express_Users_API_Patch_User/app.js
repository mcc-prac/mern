const fs = require('fs');
const express = require('express');

const app = express();
const port = 8000;

let users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

app.get('/api/v1/users', (req, res) => {
    res.json(users);
});

// Update the name of the user whose id is 2 (Using PATCH method)
app.patch('/api/v1/users/:id', (req, res) => {
    const usersList = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
    const updatedUsers = usersList.map(user => {
        if (user.id === 2) {
            user.name = 'Ram';
        }
        return user;
    });
    fs.writeFileSync('./users.json', JSON.stringify(updatedUsers, null, 2));
    res.json({ message: 'User with id 2 updated successfully' });
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
