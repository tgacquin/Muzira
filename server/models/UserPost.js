const mongoose = require('mongoose')

const UserPostSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    timestamp: {
        type: String,
        required: true
    }
})

const UserPostModel = mongoose.model("posts", UserPostSchema)
module.exports = UserPostModel;