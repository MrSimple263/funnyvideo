require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose').default;
const userRouter = require('./route/user')
const videoRouter = require('./route/video')

app.use(cors())
mongoose.connect(process.env.URL_DB, () => {
    console.log('DB connected')
})
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/user', userRouter)
app.use('/video', videoRouter)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(process.env.PORT || '3000')
