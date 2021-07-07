import React from 'react'
import "./Feed.css"
import StoryRow from './StoryRow'
import MessageSender from './MessageSender'
function Feed() {
    return (
        <div className="feed">
            
        <StoryRow/>
        <MessageSender/>
        </div>
    )
}

export default Feed
