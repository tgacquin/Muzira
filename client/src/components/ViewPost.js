import Axios  from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs'






function ViewPost(props) {

  const { id } = useParams()

  console.log(id)

  const [postLiked, setPostLiked] = useState(false)
  const [songData, setSongData] = useState({
    artistname: "",
    songname: "",
    date: "",
    description: "",
    imageurl: "",
    previewurl: "",
    user: "",
  })

  //Make a function to fetch the cover data
  useEffect(() => {
    Axios.post("http://localhost:3001/api/getpostdata", {
      username: "newboi",
      postid: id,
    }).then((result) => {
        setSongData(result.data[0])
    })
  }, [])
 

  const likePost = () => {
    setPostLiked(!postLiked)
  }



  return (
    <div className="background-default">
            <div className="popup">
                <div className="popup-inner">
                <Link to="/home/your-profile">
                    <button className="close-btn">x</button>
                </Link>
                <div className="view-post-flex-container">
                <div className="view-post-right-containter">
                    <div className="view-post-description-container">
                        <div className="view-post-description">
                          <div style={{fontWeight: 800}}>{songData.user}:</div>
                          {songData.description}
                        </div>
                    </div>
                    <div className="view-post-left-containter">
                        <div className="view-post-header">{songData.songname}</div>
                        <div className="view-post-subheader">{songData.artistname}</div>
                        <div className="view-post-album-cover">
                            <img style={{width: "100%", height: "100%"}} src={songData.imageurl}></img>
                        </div>
                        <div onClick={() => setPostLiked(!postLiked)} className="like">
                          {
                            postLiked===false ?
                          <BsSuitHeart size="1.5em"></BsSuitHeart> :
                          <BsSuitHeartFill size="1.5em"></BsSuitHeartFill>
                          }
                        </div>
                    </div>
                  

                  </div>
                  <div className="comment-box">
                    <div className="comment-box-header">
                      Comments
                    </div>
                    <div className="comment-box-comments-container">

                    </div>

                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPost