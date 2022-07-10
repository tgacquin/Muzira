const express = require("express") //Import express
const app = express()
const mongoose = require("mongoose")
const User = require('./models/Users')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://thomasgacquin:10032928Msnv6165@cluster0.u4h4upq.mongodb.net/social-database?retryWrites=true&w=majority")

app.post('/api/register', (req, res) => {
    console.log(req.body)
    try {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok'})
        
    } catch {
        res.json({ status: 'error', error: 'Duplicate email'})
    }
})

app.post('/api/login', (req, res) => {
    console.log(req.body)
    try {
        const user = User.findOne({ email: req.body.email, password: req.body.password})

        if (user) {
            return res.json({ status: 'ok', user: true})
        } else {
            return res.json({ status: 'error', user: false})
        }
        res.json({ status: 'ok'})
        
    } catch {
        res.json({ status: 'error', error: 'Duplicate email'})
    }
})








/*
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
*/
app.listen(3001, () => {
    console.log("SERVER RUNS")
})
