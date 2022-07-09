const express = require("express") //Import express
const app = express()
const mongoose = require("mongoose")
const UserModel = require('./models/Users')
const UserPostModel = require('./models/UserPost')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://thomasgacquin:10032928Msnv6165@cluster0.u4h4upq.mongodb.net/social-database?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }

    })
});

app.post("/postUsers", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

app.post("/postPost", async (req, res) => {
    const post = req.body
    const newPost = new UserPostModel(post)
    await newPost.save()

    res.json(post)

})

app.get("/getPosts", (req, res) => {
    UserPostModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })

})
app.listen(3001, () => {
    console.log("SERVER RUNS")
})
