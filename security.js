const helmet = require('helmet');
const express = require('express');
const { DatabaseError } = require('pg');

const app = express();
app.use(helmet());

app.get('/home', (req,res)=> {
    res.send("Welcome to home page");
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});
