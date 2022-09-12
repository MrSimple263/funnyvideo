const User = require('../model/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signUp(req, res) {
    try {
        const username = req.body.username;
        const pass = req.body.password;
        const passHash = await bcrypt.hash(pass, 10);
        const newUser = new User({username, password: passHash});
        const user = await newUser.save();
        user.password = '***';
        res.status(200).json(user)
    } catch (ex) {
        if (ex.code === 11000) {
            return res.status(400).json({message: 'User name have registered please user another name!'})
        }
        res.status(500).json(ex)
    }
}

async function logIn(req, res) {
    try {
        const username = req.body.username;
        const pass = req.body.password;
        const user = await User.findOne({ username }).exec();
        console.log(user)
        if (!user){
            return res.status(400).json({message:'Username not register!'})
        }
        const match = await bcrypt.compare(pass, user.password);
        if (!match){
            return res.status(400).json({message:'Password Wrong!'})
        }
        const token = jwt.sign({username},process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1h' },null);
        const userInfo ={username,token};
        return res.status(200).json(userInfo)
    } catch (ex) {
        res.status(500).json(ex)
    }
}

module.exports = {
    signUp,
    logIn,
}
