import React from 'react'
import "./ChatBox.css"
import Header from "./Header"
import MessageArea from './MessageArea';
import { SendBox } from './SendBox';


function ChatBox() {
    return (
        <div className="chatbox">
            <Header />
            <MessageArea />
            <SendBox />
        </div>
    )
}

export default ChatBox
