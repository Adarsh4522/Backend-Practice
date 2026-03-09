const express = require('express');
const cookieSession = require('cookie-session');

const app = express();
app.use(cookieSession({name: 'session', keys:['session-key'],maxAge: 24*60*60*1000}));

app.get('/', (req,res)=> {
    if(!req.session.views) {
        req.session.views = 1
    }
    else {
        req.session.views++
    }
    res.send(`Number of views: ${req.session.views}`);
    });

    app.listen(3000 ,()=> {
        console.log('server is running') 
    })

    //1> Difference between cookie-session and express-session:

    // The cookie-session middleware stores the entire session data on the client within a cookie, 
    // while express-session stores only a session identifier on the client (in a cookie) and 
    // keeps the actual session data on the server.

    //2> Require and Respond in node.js:

    //In Node.js, req and res are fundamental objects used to handle the incoming HTTP request 
    //from a client and to construct and send the outgoing HTTP response back to that client, 
    // respectively. They are passed as arguments to your route handlers and middleware functions 
    // by the Node.js runtime (or frameworks like Express.js). 
    //The req object contains information about the incoming request, such as headers,query parameters,
    //and the request body, while the res object provides methods to set response headers,
    //status codes, and send the response body back to the client.