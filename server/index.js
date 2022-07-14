const express = require("express") //Import express
const app = express()
const mongoose = require("mongoose")
const User = require('./models/Users')
const Post = require('./models/UserPost')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://thomasgacquin:10032928Msnv6165@cluster0.u4h4upq.mongodb.net/social-database?retryWrites=true&w=majority")

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: newPassword,
            description: "h",
            alias: "h",
        })
        res.json({ status: 'ok'})
    } catch {
        res.json({ status: 'error', error: 'Duplicate email'})
    }
})

app.post('/api/login', async (req, res) => {
   
    const user = await User.findOne({ username: req.body.username})

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

    //If they signed in successfully, generate the user a JWT for their session
    if (isPasswordValid) {

        const token = jwt.sign(
            {
                username: user.username,
                password: user.password
            },
            'superunknownpwshh'
        )
            console.log("Logged in")
        return res.json({ status: 'ok', user: token, username: user.username})
    } else {
        return res.json({ status: 'error', user: false})
    }
})

app.post('/api/createpost', async (req, res) => {
    //Decode json and get username of user
    const token = req.headers['x-access-token']
    const decoded = jwt.verify(token, 'superunknownpwshh')
    const username = decoded.username
    const post = 
    {user: username, 
    songurl: req.body.songurl,
    imageurl: req.body.imageurl,
    description: req.body.description,
    likes: req.body.likes,
    artistname: req.body.artistname,
    previewurl: req.body.previewurl,
    songname: req.body.songname,
    date:req.body.date};
    const newPost = new Post(post)
    await newPost.save();
    res.json({ status: 'success'})
})



app.post('/api/getuserdata', async (req, res) => {
    const token = req.headers['x-access-token']
    
    const decoded = jwt.verify(token, 'superunknownpwshh')
    const username = decoded.username
    console.log(username)
    User.find({username: username}).exec((err, result) => {
        if (err) {
            res.json(err)
        } else {
            console.log(result)
            res.json(result)
        }
    })
    
})

app.post('/api/getuserposts', async (req,res) => {
    Post.find({user: req.body.username}).sort({date: -1}).exec((err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/api/getpostdata', async (req,res) => {
    Post.find( {
        username: req.body.username,
        date: req.body.postid,
    }).exec((err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/api/editprofile', async (req, res) => {
    console.log(req.body.description)
    console.log(req.body.alias)
    const token = req.headers['x-access-token']
    const decoded = jwt.verify(token, 'superunknownpwshh')
    const username = decoded.username
    console.log(username)
    User.findOneAndUpdate( {
        username: username
    }, { $set: {
        description: req.body.description,
        alias: req.body.alias,
        }
    }).exec((err2, res2) => {
        if (err2) {
            res.json(err2)
        } else {
            res.json(res2)
        }
    })
})




app.listen(3001, () => {
    console.log("SERVER RUNS")
})
