const http = require('http');
const fs = require('fs');
const path = require('path');

var counter = 0;

const server = http.createServer((req, res) => {
    console.log('received request!')
    fs.writeFileSync(path.resolve(__dirname,'output.txt'), `received request number: ${counter++}!\n`, {flag: 'a'});
    res.end("Hello World!");
});

server.listen(5000)