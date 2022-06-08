const express= require('express');

const app = express()

const productRoutes = require('./src/routes/products');

// All
// app.use(productRoutes);

// Detail
app.use('/v1/customer/', productRoutes);


app.listen(4000)

