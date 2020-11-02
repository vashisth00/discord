import React from 'react'
import "./Chat.css"
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CradGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmoticonsIcon from '@material-ui/icons/EmojiEmotions'
//import Message from './Message'

function Chat() {
    return (
        <div className='chat' >
            <ChatHeader></ChatHeader>
       

        <div className="chat__messages">
            {/* {messages.map((message) => {
                console.log(message)
            })}
            {messages.map(message => (
                <Message message={message.message} timestamp={message.timestamp} user={message.user} />
            ))} */}
        </div>

        <div className="chat__input">
            <AddCircleIcon fontSize='large' />
            <form>
                <input type="text" placeholder="Message #${channelName}" />
                <button className='chat__inputButton' type='submit'>Send Message</button>
            </form>

            <div className="chat__inputIcon">
                <CradGiftcardIcon fontSize='large' />
                <GifIcon fontSize='large' />
                <EmojiEmoticonsIcon fontSize='large' />
            </div>
        </div>
    </div>
    )
}

export default Chat
