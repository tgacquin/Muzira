import React from 'react'
import './PopUp.css'
import {useState} from 'react'
import SearchSong from './SearchSong'
import LogIn from './LogIn'
import SignUp from './SignUp'
import NewPost from './NewPost'

function PopUp(props) {

    const [song, setSong] = useState({
            songname: "",
            previewurl: "",
            imageurl: "",
            artistname: "",
            songid: "",
    }); //Passed down to song selection

    return (
    <div className="background-default">
        <div className="popup">
            <div className="popup-inner">
                <button onClick={() => props.stateChanger("")} className="close-btn">x</button>
                {
                    {
                        "new-post":
                            <NewPost accesstoken={props.accesstoken} song={song} setsong={setSong}></NewPost>,
                        "log-in":
                            <LogIn></LogIn>,
                        "sign-up": 
                            <SignUp></SignUp>,
                    }[props.currState]
                }
                
            </div>

        </div>
    </div>
    )
}

export default PopUp