import React from 'react'
import { FaHome, FaUserFriends,  } from "react-icons/fa"

function Sidebar() {
  return (
    <div className="left-menu">
          <button className="menu-item">
            <FaHome size="2em" style={{marginRight: "15px"}}></FaHome>Home
          </button>
          <button className="menu-item">
            <FaUserFriends size="2em" style={{marginRight: "15px"}}></FaUserFriends>Friends
          </button>
          <button className="menu-item">Log Out</button>
    </div>
  )
}

export default Sidebar