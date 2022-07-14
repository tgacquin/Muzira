import React from 'react'
import { useEffect, useState } from 'react'
import { FaHome, FaUserFriends,  } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Axios from 'axios'
function Sidebar() {



  //Fetch the username

  return (
    <div className="left-menu">
          <Link to="/home/your-profile">
            <div className="menu-item">
            Your profile
          </div>
          </Link>
          <Link to="/home/feed">
            <div className="menu-item">
              Feed
            </div>
          </Link>
          <Link to="/home/search">
            <div className="menu-item">
              Search Users
            </div>
          </Link>
          <div className="media-player">
            <div className="media-player-header">Media Player</div>
          </div>
    </div>
  )
}

export default Sidebar