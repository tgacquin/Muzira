import React from 'react'
import {useState } from 'react'
import {Link, Routes, Route, useNavigate } from 'react-router-dom'
import NewPost from './NewPost'
import ViewPost from './ViewPost'
import EditProfile from './EditProfile'
import { RiArrowDownSFill } from "react-icons/ri"


function SignedInHeader(props) {

  const navigate = useNavigate();
  const [optionsTrigger, setOptionsTrigger] = useState(false)



  const [song, setSong] = useState({
    songname: "",
    previewurl: "",
    imageurl: "",
    artistname: "",
    songid: "",
    description: "",
  }); //Passed down to song selection


  return (
    
    <div className="content-header">
          <h1 className="app-logo">Musicify</h1>
          <div className="drop-down-menu">
              <div onClick={() => setOptionsTrigger(!optionsTrigger)}className="arrow"><RiArrowDownSFill size="1.5em"></RiArrowDownSFill></div>
              { 
                optionsTrigger===true ? 
                <div classname="arrow-container">
                  <div id="edit" onClick={() => {setOptionsTrigger(false);navigate("/home/your-profile/edit-profile")}} className="arrow-options1">Edit Profile</div>
                  <div id="logout" className="arrow-options2">Log out</div>
                </div> : <></>
              }
          </div>
          <div className="profile-name-header">{props.userdata.username}</div>
          <div className="profile-photo-header"></div>
          <Link to="/home/your-profile/new-post">
            <button style={{backgroundColor: "blue"}} className="login-button">+ New Post</button>
          </Link>
          <Link to="/">
            <button onClick={() => localStorage.clear()} style={{backgroundColor: "black"}} className="login-button">Log Out</button>
          </Link>
          <Routes>
              
              <Route path="your-profile/new-post" element={<NewPost posts={props.posts} setposts={props.setposts} accesstoken={props.accesstoken} song={song} setsong={setSong}/>}></Route>
              <Route path="your-profile/edit-profile" element={<EditProfile></EditProfile>}></Route>
              <Route exact path="your-profile"></Route>
              <Route path="your-profile/:id" element={<ViewPost userdata={props.userdata} setuserdata={props.setuserdata} ></ViewPost>}></Route>
              <Route path="/"/>
          </Routes>
          

    </div>
  )
}

export default SignedInHeader