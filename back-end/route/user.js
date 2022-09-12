const router = require('express').Router();
const authenticateToke = require('../middleware/verifyToken')
const {signUp, logIn} = require('../controler/userController')

router.get('/', authenticateToke, (req, res) => {
    res.status(200).json(req.user)
})
router.post('/signup', signUp)
router.post('/login', logIn)
module.exports = router;
