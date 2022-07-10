import React from 'react'
import {useState, useEffect } from 'react'
import PopUp from '../components/PopUp'
import {Link, Routes, Route } from 'react-router-dom'
import NewPost from './NewPost'
import SignUp from './SignUp'
import LogIn from './LogIn'
function Header(props) {


  

  const [song, setSong] = useState({
    songname: "",
    previewurl: "",
    imageurl: "",
    artistname: "",
    songid: "",
  }); //Passed down to song selection

  return (
    
    <div className="content-header">
          <h1 className="app-logo">Musicify</h1>

          <Link to="/new-post">
            <button style={{backgroundColor: "blue"}} className="login-button">+ New Post</button>
          </Link>
          <Link to="/log-in">
            <button  className="login-button">Log In</button>
          </Link>
          <Link to="/sign-up">
              <button className="login-button">Sign Up</button>
          </Link>

          
          

          
                      <Routes>
                          <Route path="/new-post" element={<NewPost accesstoken={props.accesstoken} song={song} setsong={setSong}/>}></Route>
                          <Route path="/log-in" element={<LogIn></LogIn>}></Route>
                          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
                          <Route path="/"/>
                      </Routes>
                 
        
              
              
          
              
    </div>
  )
}

export default Header