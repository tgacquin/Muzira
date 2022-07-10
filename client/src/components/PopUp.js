import React from 'react'
import './PopUp.css'
import {useState} from 'react'
import SearchSong from './SearchSong'
import LogIn from './LogIn'
import SignUp from './SignUp'
import NewPost from './NewPost'
import { Route, Routes} from 'react-router-dom'

function PopUp(props) {

    const [song, setSong] = useState({
            songname: "",
            previewurl: "",
            imageurl: "",
            artistname: "",
            songid: "",
    }); //Passed down to song selection

    return (
    <>
        <div className="background-default">
            <div className="popup">
                <div className="popup-inner">
                    <button onClick={() => props.stateChanger("")} className="close-btn">x</button>
                    <Routes>
                        <Route exact path="/new-post" element={<NewPost accesstoken={props.accesstoken} song={song} setsong={setSong}/>}></Route>
                        <Route exact path="/log-in" element={<LogIn></LogIn>}></Route>
                        <Route exact path="/sign-up" element={<SignUp></SignUp>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    </>
    )
}

export default PopUp