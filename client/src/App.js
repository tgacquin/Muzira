import './App.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'


import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import PopUp from './components/PopUp'

function App() {

  const CLIENT_ID = 'e1e48d5e3bde43dabfec1746cfb153cf'
  const CLIENT_SECRET = 'bc2e3621dd1e4614ac7cd3657151960d'

  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    //API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
      
  }, [])

  console.log(accessToken)

  //Search function

  
  return (
      <div className="container">
        <Header accesstoken={accessToken}></Header>
        <div className="columns">
          <Sidebar></Sidebar>
          <div className="content">
            <Profile></Profile>
          </div>
      </div>
    </div>
  );
}

export default App;
