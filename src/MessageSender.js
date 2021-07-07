import React from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
function MessageSender() {
    const submit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar/>
                <form>
                    <input className="messagesender__input" type="text" placeholder="What on ur Mind"/>
                    <input placeholder="image Url (optional) " />
                    <button type="submit" onClick={submit}>submit</button>
                </form>

            </div>
            <div className="messagesender__bottom ">
                <div className="messagesender__option">

                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>

                </div>
                <div className="messagesender__option">

                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo Gallery</h3>

                </div>
            <div className="messagesender__option">

            <EmojiEmotionsIcon style={{color:"yellow"}}/>
            <h3>FeelingActivity</h3>

            </div>

            </div>
            
        </div>
    )
}

export default MessageSender
