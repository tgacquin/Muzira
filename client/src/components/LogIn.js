import React from 'react'
import {useState} from 'react'

function LogIn() {

  


  return (
    <div style={{alignItems: "center", justifyContent: "center"}} className="login-signup">
        <h1 style={{marginBottom: "30px", fontWeight: "700"}}>Musicify</h1>
        <h1 className="popup-header">Log In</h1>
        <input style={{marginTop:"20px"}} className="popup-input-login" placeholder="Enter username"></input>
        <input className="popup-input-login" placeholder="Enter email"></input>
        <input type="password" className="popup-input-login" placeholder="Enter password"></input>
        <input type="password" className="popup-input-login" placeholder="Verify password"></input>
        <button className="popup-button">Register</button>
    </div>
  )
}

export default LogIn