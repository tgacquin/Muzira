import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Axios from 'axios'
function EditProfile() {

    const [alias, setAlias] = useState("")
    const [desc, setDesc] = useState("")

    const submitNewProfile = () => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                console.log("token removed")
                localStorage.removeItem('token')
                navigate("/")
            } else { 
                Axios.post('http://localhost:3001/api/editprofile', {alias: alias, description: desc}, {headers: {
                    'x-access-token': localStorage.getItem('token')
                }})
            }
        } else {
            navigate("/")
        }
    }

    const navigate = useNavigate();
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
            }}).then((result => {
                setAlias(result.data[0].alias)
                setDesc(result.data[0].description)
            }))
          }
        } else {
            navigate("/")
        }
        

    },[])

 


  return (
    <div className="popup">
        <div className="popup-inner">
            
            <Link to="/home/your-profile">
                <button className="close-btn">x</button>
            </Link>
            <div className="edit-profile-flex">
                <div className="edit-profile-header">
                    Edit info
                </div>
                <input onChange={(e) => setAlias(e.target.value)} className="edit-info-input" value={alias} placeholder="Edit alias"></input>
                <input onChange={(e) => setDesc(e.target.value)} className="edit-info-input" value={desc} placeholder="Edit description"></input>
                <button onClick={submitNewProfile} className="edit-info-submit"></button>
            </div>
        </div>
    </div>
  )
}

export default EditProfile