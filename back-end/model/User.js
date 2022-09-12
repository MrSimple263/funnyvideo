const mongoose = require('mongoose').default
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 4,
        maxlength: 10,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    }
});
module.exports = mongoose.model("User", userSchema)
