import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

function NotLoggedIn() {
  const Navigate = useNavigate()
  //Redirect to home if user is logged in

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = jwt.decode(token)
    if (!user) {
        console.log("token removed")
        localStorage.removeItem('token')
        Navigate("/")
    } else {
        Navigate("/home/your-profile")
    }


  },[])


  return (
    <div className="not-logged-in-container">
        
        <div className="not-logged-in-content">
            <h1>Share your favorite music.</h1>
        </div>
        <div style={{marginLeft: "40px", paddingTop: "10px", fontSize: "30px", fontWeight: "300"}}>Stream and play music your friends like</div>

    </div>
  )
}

export default NotLoggedIn