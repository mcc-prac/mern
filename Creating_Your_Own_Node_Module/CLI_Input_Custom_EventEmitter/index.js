const fs = require('fs');
const readline = require('readline');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleInput(input) {
    eventEmitter.emit('textReady', input);
}

eventEmitter.on('textReady', (text) => {
    console.log(`Custom event fired: Text is ready - ${text}`);
    fs.writeFile('text.txt', text, (err) => {
        if (err) throw err;
        console.log('Text has been saved to text.txt');
        rl.close();
    });
});

rl.question('Enter some text: ', (text) => {
    handleInput(text);
});
