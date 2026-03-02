//It is a third party middleware.
const express = require('express');
const {body, validationResult} = require('express-validator');

const app = express();
app.use(express.urlencoded({extended:false}));

app.get('/form', (req,res)=>{
    res.send(`<form method = "POST" action = "/register">
    <input type = "email" name = "email" placeholder = "Enter your email" required/>
    <input type = "password" name = "password" placeholder = "Enter your password" required/>
    <button type = "submit">Register</button>
    </form>`);
});

app.post('/register', [body('email').isEmail().withMessage('Invalid email format'),
body('password').isLength({min:5}).withMessage('Password must be 5 character long'),
 ] , (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.send(`<h1>Errors: $JSON.stringify(errors.array())}<h1>`);

    }
    res.send(`<h1>Registration Successfull</h1>`);
});

app.listen(3000, ()=> {
    console.log("Server is running at 3000");
});