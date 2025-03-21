const express = require('express');
const conn = require('./connect/conn');
const app = express();
const listModel = require('./models/list');
const userModel = require('./models/user');
conn()
app.listen(3005, () => {
    console.log('Server is running on port 3005');
})

