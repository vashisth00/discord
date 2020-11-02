import React from 'react'
import "./Message.css"
import { Avatar } from '@material-ui/core'

function Message() {
    return (
        <div className="message">
            <Avatar></Avatar>
            <div  className="message__info">
                <h4> Vashisth Bhushan
                    <span className="message__timestamp">7:52pm</span>

                </h4>
            </div>
        </div>
    )
}

export default Message
 