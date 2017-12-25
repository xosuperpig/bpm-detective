const http = require('http');
const fs = require('fs');
let mp3server = require('./mp3server');

const run = require('browser-run');

http.createServer(mp3server).listen(8000, function() {
    console.log('listen on 8000');
    let browser = run({
        // browser: 'chrome'
    });
    browser.pipe(process.stdout);
    browser.end(fs.readFileSync(__dirname + '/bpm-detective.js', 'utf-8'));
});