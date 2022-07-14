import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import { IoIosPlay, IoIosPause } from "react-icons/io"

function Profile(props) {

  const navigate = useNavigate();

  const [play, setPlay] = useState(false);

  const playClick = (e) => {
    e.stopPropagation();
    setPlay(!play);
  }



  const postClick = (e) => {
      navigate(`/home/your-profile/${e.currentTarget.getAttribute('date')}`)
  }

  //Check if user is valid. If not, redirect to home
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
        const user = jwt.decode(token)
        if (!user) {
            console.log("token removed")
            localStorage.removeItem('token')
            navigate("/")
        } else {
          //Perform Request
          Axios.post('http://localhost:3001/api/getuserdata', {},{headers: {
            'x-access-token': localStorage.getItem('token')
          }}).then((result) => {
              console.log(result.data[0].username)
              props.setuserdata({username: result.data[0].username, 
              description: result.data[0].description, alias: result.data[0].alias})
              Axios.post('http://localhost:3001/api/getuserposts',{
                username: result.data[0].username
              }).then((result) => {
                props.setposts(result.data) //Prop is from Home
              })

          })
        }
      } else {
        navigate("/")
      }
  },[])





  return (
    <div className="profile-wrapper">
    <div className="profile-contents">
        <div className="profile-photo"></div>
        <div className="profile-contents-inner-wrapper">
            <h1 className="profile-name">@{props.userdata.username}</h1>
            <div className="profile-bio">
                {props.userdata.alias}
            </div>
            <textfield className="profile-stats">{props.userdata.description}</textfield>
        </div>
   
  </div>
  <div className="user-posts-container">
        {
          props.posts.map(e => {
       
          return (
            <div onClick={postClick} 
              className="user-post-container"
              date={e.date}
              artistname={e.artistname}
              songname={e.songname}
              imageurl={e.imageurl}
              description={e.description}
              previewurl={e.previewurl}
              >
                <div className="user-post-image">
                  <img width="100%" height="100%" src={e.imageurl}></img>
                  <div className="user-post-overlay">
                      <div onClick={playClick} className="pause-play">
                        {
                        play===false ?
                          <IoIosPlay size="4.0em" color="white"></IoIosPlay>
                        :
                          <IoIosPause size="4.0em" color="white"></IoIosPause>
                        }
                      </div>
                  </div>
                  
                </div>
              </div>
            )
          
          })
          
        }
    </div>
</div>
  )
}

export default Profile