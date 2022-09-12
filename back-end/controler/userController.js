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
        res.status(500).json(ex)
    }
}

async function logIn(req, res) {
    try {
        const username = req.body.username;
        const pass = req.body.password;
        const user = await User.findOne({ username }).exec();
        const match = await bcrypt.compare(pass, user.password);
        if (!match){
            res.status(403).json({message:'username or password invalid!'})
        }
        const token = jwt.sign({username},process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1h' },null);
        const userInfo ={username,token};
        res.status(200).json(userInfo)
    } catch (ex) {
        console.log(ex)
        res.status(500).json(ex)
    }
}

module.exports = {
    signUp,
    logIn,
}
