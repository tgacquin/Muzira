const mongoose = require('mongoose')

const UserPostSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    songname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    previewurl: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        required: true
    },
    artistname: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    }
}, { collection: 'posts'})

const model = mongoose.model("Post", UserPostSchema)
module.exports = model;