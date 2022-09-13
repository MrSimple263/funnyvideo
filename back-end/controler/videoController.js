const Video = require('../model/Video')
const fetchVideoInfo = require('updated-youtube-info');
const {CODE_INVALID_ID_VIDEO, CODE_INVALID_URL_VIDEO} = require('../constant');

async function videoSize(req, res) {
    const size = await Video.countDocuments()
    res.status(200).json(size);
}

async function listUp(req, res) {
    let perPage = 10;
    let page = req.query.page || 1;
    const videos = await Video.find({})
        .skip((perPage * page) - perPage)
        .limit(perPage).sort({createdAt:'descending'}).exec();
    const size = await Video.countDocuments()
    res.status(200).json({videos,size});
}

async function upload(req, res) {
    try {
        const urlVideo = new URL(req.body.url);
        const userShare = req.user.username;
        const idVideo = urlVideo.searchParams.get('v');
        if (!idVideo) res.status(400).json({code: CODE_INVALID_URL_VIDEO, message: 'Invalid URL'});
        fetchVideoInfo(idVideo).then(async videoInfo => {
            const {title, description} = videoInfo;
            const newVideo = new Video({
                id: idVideo,
                title,
                description,
                userShare
            })
            const video = await newVideo.save();
            res.status(200).json(video)
        }).catch(err => {
            if (err.code === 11000) {
                return res.status(400).json({message: 'Video has uploaded!'})
            }
            res.status(400).json({code: CODE_INVALID_ID_VIDEO, message: 'Invalid idVideo'})
        });
    }catch (ex){
        res.status(400).json({message: 'This not URL'})
    }

}

module.exports = {
    videoSize,
    listUp,
    upload
}
