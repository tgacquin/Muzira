import React from 'react'
import { useState } from 'react'
import SearchSong from './SearchSong'
import { Link, useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Axios from 'axios'

function NewPost(props) {

    const Navigate = useNavigate()

    const [description, setDescription] = useState("")

        const post = () => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                console.log("token removed")
                localStorage.removeItem('token')
                Navigate("/")
            } else {
                const date = Date.now()
                Axios.post("http://localhost:3001/api/createpost", 
                {songname: props.song.songname,
                previewurl: props.song.previewurl,
                imageurl: props.song.imageurl,
                artistname: props.song.artistname,
                description: description, 
                likes: 0,
                date: date,}, {headers: {
                    'x-access-token': localStorage.getItem('token')
                }}).then((response) => {
                    console.log(response)
                    console.log("reached")
                    props.setposts([
                        {songname: props.song.songname,
                            previewurl: props.song.previewurl,
                            imageurl: props.song.imageurl,
                            artistname: props.song.artistname,
                            description: description, 
                            likes: 0,
                            date: date,},...props.posts
                    ])
                })
            }
        } else {
            Navigate("/")
        }
    }



  return (
    <>

<div className="background-default">
    <div className="popup">
        <div className="popup-inner">
            <Link to="/home/your-profile">
            <button className="close-btn">x</button>
            </Link>
            <div className="max-width">
                <h1 className="popup-header">New Post</h1>
                <div className="new-post-contents-flex">
                    <div className="album-cover">
                        <img style={{maxHeight: "100%", maxWidth: "100%"}} src={props.song.imageurl}></img>
                    </div>
                    <div className="new-post-contents-search-and-desc">
                        <SearchSong song={props.song} setsong={props.setsong} accesstoken={props.accesstoken}></SearchSong>
                        <textarea 
                            onChange={(e) => setDescription(e.target.value)} 
                            placeholder="Enter description" 
                            className="enter-desc"
                            value={description}>
                        </textarea>
                    </div>
                </div>
                <div className="bottom-content">
                    <div className="song-title-artist-flex">
                        <div className="song-title">{props.song.songname} </div>
                        <div className="song-artist">{props.song.artistname} </div>
                    </div>
                    <Link to="/home/your-profile">
                        <button onClick={post} className="submit-post">Submit Post</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default NewPost