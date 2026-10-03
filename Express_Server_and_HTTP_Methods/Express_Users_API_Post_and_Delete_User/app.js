const fs = require('fs');
const express = require('express');

const app = express();
const port = 8000;

app.use(express.json());

let users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

app.get('/api/v1/users', (req, res) => {
    res.json(users);
});

// a. Add a new user in JSON file and send response
app.post('/api/v1/users', (req, res) => {
    const newUser = req.body && req.body.name ? req.body : { id: 4, name: "Mack", age: 15 };
    users.push(newUser);
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
    res.status(201).json({
        status: "SUCCESS",
        message: "User added successfully",
        user: newUser
    });
});

// b. Delete a user whose id is passed in param
app.delete('/api/v1/users/:id', (req, res) => {
    let id = req.params.id * 1;
    const usersList = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
    const updatedUsers = usersList.filter(user => user.id !== id);
    fs.writeFileSync('./users.json', JSON.stringify(updatedUsers, null, 2));
    res.json({ message: 'User deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});
