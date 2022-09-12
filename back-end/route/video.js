const router = require('express').Router()
const {upload, listUp, videoSize} = require('../controler/videoController')
const authenticateToke = require('../middleware/verifyToken')

router.get('/size', videoSize)
router.get('/list', listUp)
router.post('/upload', authenticateToke, upload)
module.exports = router;
