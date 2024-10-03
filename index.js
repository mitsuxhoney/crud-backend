const express = require('express');

const app = express();

const connect = require('./config/connection.js');

const userRouter = require('./routes/router');

const mongoose = require('mongoose');

const port = 3000;

app.use(express.json());

connect('mongodb://localhost:27017/nodeServer');

app.use('/api/v1/', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});