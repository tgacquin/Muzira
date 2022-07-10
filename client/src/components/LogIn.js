import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function LogIn() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function loginUser(event) {
    return 
  }


  return (

    <div className="background-default">
              <div className="popup">
                  <div className="popup-inner">
                      <Link to="/">
                        <button className="close-btn">x</button>
                      </Link>


    <div style={{alignItems: "center", justifyContent: "center"}} className="login-signup">
        <h1 style={{marginBottom: "30px", fontWeight: "700"}}>Musicify</h1>
        <h1 className="popup-header">Log In</h1>
        <input onChange={(e) => setUsername(e.target.value)} value={username} style={{marginTop:"20px"}} className="popup-input-login" placeholder="Enter username"></input>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="popup-input-login" placeholder="Enter password"></input>
        <button onClick={loginUser} className="popup-button">Register</button>
    </div>
    </div>
    </div>
    </div>

  )
}

export default LogIn