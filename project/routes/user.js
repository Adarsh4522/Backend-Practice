const express = require('express');
const { post } = require('./product');
const router = express.Router();

router.use((req,res, next)=> {
    console.log('usewr route accessed at:', new Date().toLocalDateTimeString());
    next();
});

router.get('/', (req,res)=> {
    res.send('list of all users');
});

router.post('/', (req,res)=> {
    const { name, email } = req.body;
    res.send(`User ${name} with email ${email} created successfully`);
});

module.exports = router;

// curl -X POST
// http://localhost:3000/user