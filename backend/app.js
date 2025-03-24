const express = require('express');
const conn = require('./connect/conn');
const app = express();
const listModel = require('./models/list');
const userModel = require('./models/user');
const auth=require('./routes/auth')
const list=require('./routes/list')
conn()
app.use(express.json());
app.use('/api/v1',auth)
app.use('/api/v2',list)
app.listen(3005, () => {
    console.log('Server is running on port 3005');
})

