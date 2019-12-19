const express =  require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
require('./src/models/Products')


app.use('/api',require('./src/routes.js'))

app.listen(3000);