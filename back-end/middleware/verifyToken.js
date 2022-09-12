const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) throw 'Dont have token';
        req.user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next()
    } catch (ex) {
        res.status(403).json({message: 'Token wrong!'})
    }
}
module.exports = verifyToken;
