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

app.post('/register', (req,res)=> { // POST route in express.js
    const {name, email} = req.body;
    res.send(`Registered ${name} with email ${email}`);
});

app.listen(3000, ()=> {
    console.log('server is running');
});

// curl -x POST 
//  http://localhost:3000/register \
// -H "Content-Type:application/json" \
// -d '{"name": "Adarsh", "email": "adarsh94193@gmail.com"}'