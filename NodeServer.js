const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    /*
        // Example of req object
        console.log('URL: ', req.url);
        console.log('Method: ', req.method);
        console.log('Headers: ', req.headers);
    
        sending response header
        res.writeHead(200, { 'content-type': 'text/plain' });
    
        sending response body
        res.end("Hello world! This is my first nodeJs server");
        res.write("This is the second line of response body");
        
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Welcome</h1>');
        res.end('<p style="color: red;">This isn\'t the end of response body</p>');    
    */

    res.setHeader('Content-type', 'text/html');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end('<h1 style="color: blue">Welcome to Home Page</h1> <p>This is the landing page of our website.</p>');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200);
        res.end('<h1 style="color: green">Welcome to About Page</h1> <p>This page contains information about our company.</p>')
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200);
        res.end('<h1 style="color: orange">Welcome to Contact Page</h1> <p>This page contains contact information.</p> <em>localhost@gmail.com</em>')
    } else {
        res.writeHead(404);
        res.end('<h1 style="color: red">404 Not Found</h1> <p>The page you are looking for does not exist.</p>')
    }

});

server.listen(port, () => {
    console.log('The server is running at ${port}');
})