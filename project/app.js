const express = require('express');
const app = express();
 
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

app.use('/user', userRoutes);
app.use('/product', productRoutes);


app.listen(3000, ()=> {
    console.log('server is running');
});
