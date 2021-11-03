import React from "react";
import "./MessageArea.css"

export default function MessageArea(headline, sender, receiver) {
    
    return (
        <div className="message-area">
            <div id="headline">
                Chat Conversation with receiver.
            </div>
            <div className="messages">
            </div>
        </div>
    )
}