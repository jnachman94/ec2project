const http = require('http');

const server = http.createServer((req, res) => {
    console.log('received request!')
    res.end("Hello World!");
});

server.listen(5000)