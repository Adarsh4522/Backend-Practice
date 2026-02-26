const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/' , (req,res)=> {   //GET route in express.js
    res.send('Welcome to home page');
});

app.get('/about', (req,res)=> {
    res.send('This is a about page');
});

app.post('/register', (req,res)=> {
    
})