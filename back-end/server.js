require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose').default;
const userRouter = require('./route/user')
const videoRouter = require('./route/video')

app.use(cors())
console.log('url', process.env.URL_DB)
console.log('token', process.env.ACCESS_TOKEN_SECRET)
mongoose.connect(process.env.URL_DB, () => {
    console.log('DB connected')
})
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/user', userRouter)
app.use('/video', videoRouter)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
//deal 404 not found
app.use(function (req, res) {
    res.status(404).send("<h1>Page not found on the server</h1>")
});

app.listen(process.env.PORT || '3000')
