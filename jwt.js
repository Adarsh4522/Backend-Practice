const express = require('express');
const jwt = require('jsonwebtocken');

const app = express();
app.use(express.json());

const SECRET =  "key123";

app.post('/login', (req,res)=> {
    const{username, password} = req.body;
    if(username === 'admin' && password === '1234') {
        const token = jwt.sign({username}, SECRET, { expiresIn: '1m' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/home', (req,res)=> {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        return res.send('No token found');
    }
    const token = authHeader.split(' ')[1];   //"Token xyz123" -> ["Token", "xyz123"]
    jwt.verify(token, SECRET, (err)=>  {
        if(err) {
            return res.send('Invalid token');
        }
        res.send('Welcome to the home page!');
    });

});