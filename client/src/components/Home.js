import {useState, useEffect} from 'react'
import Axios from 'axios'
import Profile from './Profile'
import Sidebar from './Sidebar'
import Header from './Header'
import PopUp from './PopUp'
import Alert from './Alert'
import SignedInHeader from './SignedInHeader'
import { BrowserRouter as Router } from 'react-router-dom'
import NotLoggedIn from './NotLoggedIn'
import jwt from 'jsonwebtoken'
import { useNavigate, Routes, Route } from 'react-router-dom'
import NotLoggedInSidebar from './NotLoggedInSidebar'
import Feed from './Feed'
import SearchUser from './SearchUser'
import PageNotFound from './PageNotFound'
function Home() {

  
  const [userData, setUserData] = useState({username: "", postid: ""});
  const [posts, setPosts] = useState([])
  const [username, setUsername] = new useState("")
  const CLIENT_ID = 'e1e48d5e3bde43dabfec1746cfb153cf'
  const CLIENT_SECRET = 'bc2e3621dd1e4614ac7cd3657151960d'

  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    //API Access Token for Spotify, gets passed down to SearchSong
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

  
/*
  useEffect(() => {
    Axios.get('http://localhost:3001/api/getuserdata', {
       token: localStorage.getItem('token')
    }).then((response) => {
      setUsername("/home/" + response.username)
      console.log(username)
    })
  }, [])
  */

  const navigate = useNavigate()
 

  
  return (
      
      <div className="container">
         <Routes>
              <Route path="/home/*" element={<SignedInHeader userdata={userData} setuserdata={setUserData} posts={posts} setposts={setPosts} accesstoken={accessToken}></SignedInHeader>}></Route>
              <Route path="*" element={<Header/>}></Route>
          </Routes>
        
        <div className="columns">
        <Routes>
              <Route path="/home/*" element={<Sidebar></Sidebar>}></Route>
              <Route path="*" element={<NotLoggedInSidebar></NotLoggedInSidebar>}></Route>
          </Routes>
          
          <div className="content">

            <Routes>
              <Route path="/home/your-profile/*" element={<Profile userdata={userData} setuserdata={setUserData} posts={posts} setposts={setPosts} accesstoken={accessToken}/>}></Route>
              <Route path="/home/feed" element={<Feed/>}></Route>
              <Route path="/home/search" element={<SearchUser/>}></Route>
              <Route path="/home/*" element={<PageNotFound/>}></Route>
              <Route path="*" element={<NotLoggedIn/>}></Route>
            </Routes>
            
          </div>
      </div>
    </div>
      
  );
  
}

export default Home;
