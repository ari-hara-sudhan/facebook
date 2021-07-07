import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { IconButton } from '@material-ui/core';
import "./Posts.css"
function Posts({message,user,timestamp,image,profile}) {
    return (
        <div className="posts">
            <div className="posts__top">
                <Avatar src={profile}/>
                <div className="post__topInfo">
                    <h4>{user}</h4>
                    <h5>{timestamp}</h5>

                </div>

            </div>
            <div className="post__center">
                <div className="post__centerMessage">
                    <h4>{message}</h4>

                </div>
                <img className="post__image" src={image} alt={"image"}/>

            </div>
            <div className="post__bottom">
                <IconButton>
                    <ThumbUpIcon/>
                </IconButton>
                <IconButton>
                <ThumbDownAltIcon/>
                </IconButton>
                <IconButton>
                <FavoriteIcon/>
                </IconButton>
                <IconButton>
                <ShareIcon/>
                </IconButton>

            </div>
        </div>
    )
}

export default Posts
