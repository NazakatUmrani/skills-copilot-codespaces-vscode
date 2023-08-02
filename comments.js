// Create web server
// 1. Create a web server object
// 2. Add a request listener
// 3. Start the server listening on port 3000

const http = require('http'); // 1. Import the http module

const hostname = 'localhost'; // 2. Set the hostname
const port = 3000; // 3. Set the port number

const server = http.createServer((req, res) => { // 4. Create the server
    console.log(req.headers); // 5. Log the request headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
});

server.listen(port, hostname, () => { // 6. Start the server listening
    console.log(`Server running at http://${hostname}:${port}/`);
});