import React, { useEffect, useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Posts from './Posts';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
function MessageSender() {
    const [{user},dispatch]=useStateValue()
    const[text,setText]=useState();
    const[url,setUrl]=useState();
    const[posts,setPosts]=useState([])
    const submit=(e)=>{
        e.preventDefault();
        db.collection("feeds").add({
            message:text,
            image:url,
            profile:user?.photoURL,
            user:user?.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setText("");
        setUrl("");
    }

    useEffect(()=>{
        db.collection("feeds").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })

    },[])
    return (
        <div >
            <div className="messagesender">
            <div className="messagesender__top">
                <Avatar/>
                <form>
                    <input value={text} onChange={e=>setText(e.target.value)} className="messagesender__input" type="text" placeholder="What on ur Mind"/>
                    <input value={url} onChange={e=>setUrl(e.target.value)}  placeholder="image Url (optional) " />
                    <button disabled={!text} type="submit" onClick={submit}>submit</button>
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
         {
             posts.map(({id,data})=>(
                <Posts
                id={id}
                message={data.message}
                user={data.user}
                timestamp={data.timestamp}
                image={data.image}
                profile={data.profile}
                
                />

             ))
         }
            
        
        </div>
    )
}

export default MessageSender
