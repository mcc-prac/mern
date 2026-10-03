const fs = require("fs");

fs.readFile("./sample.txt", "utf-8", (error, data) => {
    if (error) {
        throw new Error('Error reading file!');
    }
    console.log(data);
});
