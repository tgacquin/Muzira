import React from 'react'
import {useState} from 'react'


function SignUp() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")


  return (
    <div style={{alignItems: "center", justifyContent: "center"}} className="login-signup">
        <h1 style={{marginBottom: "30px", fontWeight: "700"}}>Musicify</h1>
        <h1 className="popup-header">Sign Up</h1>
        <input onChange={(e) => setUsername(e.target.value)} value={username} style={{marginTop:"20px"}} className="popup-input-login" placeholder="Enter username"></input>
        <input onChange={(e) => setEmail(e.target.value)} value={email} className="popup-input-login" placeholder="Enter email"></input>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="popup-input-login" placeholder="Enter password"></input>
        <input onChange={(e) => setVerifyPassword(e.target.value)} value={verifyPassword} type="password" className="popup-input-login" placeholder="Verify password"></input>
        <button className="popup-button">Register</button>
    </div>
  )
}

export default SignUp