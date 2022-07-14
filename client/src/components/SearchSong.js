import React from 'react'
import {useState} from 'react'

function SearchSong(props) {

    const [searchTrack, setSearchTrack] = useState("")
    const [tracks, setTracks] = useState([])

    

    const storeSongData = (e) => {
        props.setsong({
            songname: e.currentTarget.getAttribute('songname'),
            previewurl: e.currentTarget.getAttribute('previewurl'),
            imageurl: e.currentTarget.getAttribute('imageurl'),
            artistname: e.currentTarget.getAttribute('artistname'),
        })
        setTracks([])
        setSearchTrack(e.currentTarget.getAttribute('songname'))
    }
    


    async function search() {

        var trackParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.accesstoken,

            }
        }
        try {
        var trackName = await fetch('https://api.spotify.com/v1/search?q=' + searchTrack + '&type=track&limit=5', trackParameters)
            .then(response => response.json())
            .then(data => {console.log(data.tracks.items); setTracks(data.tracks.items)})
        } catch {
            console.log("Searching elements...")
        }
    }

  return (
    <>
        <input onChange={(e)=> {setSearchTrack(e.target.value); search()}} className="search-track-input" placeholder="Enter track name" value={searchTrack}></input>
            <div className="search-track-items">
                {tracks.map((e, i) => {
                    return (
                        <div 
                            id={i} 
                            songname={e.name}
                            previewurl={e.preview_url}
                            imageurl={e.album.images[0].url} 
                            artistname={e.artists[0].name} 
                            songid={e.id}
                            className="search-track-item" 
                            onClick={storeSongData}>{e.name} - {e.artists[0].name}
                        </div>
                    )
                })}
            </div>
    </>
  )
}

export default SearchSong