import React from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Posts from './Posts';
function MessageSender() {
    const submit=(e)=>{
        e.preventDefault();
    }
    return (
        <div >
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
         
            <Posts 
            message="hello"
            user="ahs"
            timestamp="3 minu ago"
            image="https://www.bing.com/th?id=OIP.5TFdq1ah-13yRK4aqMqt8wHaFj&w=191&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.7MIeXhMZDa45zGwOg1jPyAHaE9&w=213&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            
            />
        
        </div>
    )
}

export default MessageSender
