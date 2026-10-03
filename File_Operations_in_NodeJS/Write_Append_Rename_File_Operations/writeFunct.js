const fs = require('fs/promises');

const writeFunct = async () => {
    try {
        const d = await fs.readFile('example.txt', 'utf-8');
        console.log("Before write:", d);
        
        await fs.writeFile('example.txt', 'Writing in a file', "utf-8");
        await fs.appendFile('example.txt', '\n data append via node.js', "utf-8");
        await fs.rename('example.txt', 'NewWrite.txt');
        
        const data = await fs.readFile('NewWrite.txt', "utf-8");
        console.log("After rename and read:", data);
    } catch (err) {
        throw err;
    }
};

writeFunct();
