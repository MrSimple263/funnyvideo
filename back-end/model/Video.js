const mongoose = require('mongoose')
const videoSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        minlength: 4,
        unique: true
    },
    title: {
        type: String,
        minlength: 1
    },
    description: {
        type: String,
        minlength: 1
    },
    userShare:{
        type: String,
        require: true,
        minlength: 4,
        maxlength: 10
    }
}, {timestamps: true});
module.exports = mongoose.model("Video", videoSchema)
