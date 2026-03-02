const express = require('express');
const router = express.Router();

router.use((req,res, next)=> {
    console.log('Product route accessed at: ', new Date.toLocalDateString());
    next();

    router.get('/', (res,req)=> {
        res.send('list of all the products');
    });

    router.get('/list', (req, res)=> {
        res.send('List is not ready yet.');
        
    });
});

module.exports = router;

