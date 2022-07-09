import React from 'react'
import SearchSong from './SearchSong'

function NewPost(props) {
  return (
    <div className="max-width">
        <h1 className="popup-header">New Post</h1>
        <div className="new-post-contents-flex">
            <div className="album-cover">
                <img style={{maxHeight: "100%", maxWidth: "100%"}} src={props.song.imageurl}></img>
            </div>
            <div className="new-post-contents-search-and-desc">
                <SearchSong song={props.song} setsong={props.setsong} accesstoken={props.accesstoken}></SearchSong>
                <input placeholder="Enter description" className="enter-desc"></input>

            </div>
        </div>
        <div className="bottom-content">
            <div className="song-title-artist-flex">
                <div className="song-title">{props.song.songname} </div>
                <div className="song-artist">{props.song.artistname} </div>
            </div>
            <button className="submit-post">Submit Post</button>
        </div>
        
    </div>
  )
}

export default NewPost