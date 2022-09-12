require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose').default;
const userRouter = require('./route/user')

mongoose.connect(process.env.URL_DB, () => {
    console.log('DB connected')
})
app.use(express.json())
app.use('/user', userRouter)

app.listen('3000'|| process.env.port)
