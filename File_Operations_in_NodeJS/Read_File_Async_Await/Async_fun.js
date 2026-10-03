const fs = require("fs").promises;

async function readFile() {
    try {
        const data = await fs.readFile("sample.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile();
