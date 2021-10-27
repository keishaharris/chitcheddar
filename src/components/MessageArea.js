import React from "react";
import "./MessageArea.css"

export default function MessageArea(headline, sender, receiver) {

    return (
        <div className="message-area">
            <div id="headline">
                Chat Conversation with receiver.
            </div>
            <div className="messages">
                <div id="receiver">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </div>
                <div id="sender">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </div>
                <div id="receiver">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </div>
                <div id="sender">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </div>
                <div id="receiver">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </div>
                <div id="sender">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </div>
            </div>
        </div>
    )
}