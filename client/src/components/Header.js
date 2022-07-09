import React from 'react'
import {useState} from 'react'
import PopUp from '../components/PopUp'

function Header(props) {

 const [popUp, setPopUp] = useState("")

  return (
    
    <div className="content-header">
          <h1 className="app-logo">Musicify</h1>
          <button style={{backgroundColor: "blue"}} onClick={() => setPopUp("new-post")} className="login-button">+ New Post</button>
          <button onClick={() => setPopUp("log-in")} className="login-button">Log In</button>
          <button onClick={() => setPopUp("sign-up")} className="login-button">Sign Up</button>
          {
            {
                "new-post": <PopUp accesstoken={props.accesstoken} currState={popUp} stateChanger={setPopUp}/>,
                "log-in": <PopUp currState={popUp} stateChanger={setPopUp} />,
                "sign-up": <PopUp currState={popUp} stateChanger={setPopUp}/>
            }[popUp]
          }
    </div>
  )
}

export default Header