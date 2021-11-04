import React, { useState } from "react";
import "./SendBox.css";
import { GiOldMicrophone } from "react-icons/gi";
import { BsFillPlayFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaStop } from "react-icons/fa";
import {addMessage} from "../websocket"

const appendElement = (classNm, content) => {
  const messages = document.getElementById("messages");
  const node = document.createElement("DIV");
  node.className = classNm;
  if (classNm == "sender") {
    const audio = document.createElement("audio");
	audio.src = URL.createObjectURL(content);
    audio.controls = true;
    audio.autoplay = true;
    node.appendChild(audio);
	messages.appendChild(node);
  } else {
    const textnode = document.createTextNode(`Transacript: ${content}`); // Create a text node
    node.appendChild(textnode);
	messages.appendChild(node);
  }
};

export function displayTransacript(text) {
	console.log('displayTransacript', text)
	if(text !== "Ready to listen on band 443"){
	appendElement('receiver', text);
	}
}

export function SendBox() {
  let mediaRecorder;
  let audioChunks = [];

  const getStream = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support recording!");
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
      })
      .catch((err) => console.log("The following gUM error occured: " + err));
  };

  const handleRecord = (event) => {
    if (event === "start") {
      mediaRecorder.start();
    } else {
      mediaRecorder.stop();
      mediaRecorder.ondataavailable = (e) => {
		audioChunks.push(e.data);
        if (mediaRecorder.state === "inactive") {
          const audioBlob = new Blob(audioChunks, {
            type: "video/webm;codecs=opus",
          });
          appendElement("sender", audioBlob);
          sendData(audioBlob);
        }
      };
    }
  };

  async function sendData(audioBlob) {
    const reader = new window.FileReader();
    await reader.readAsDataURL(audioBlob);
    reader.onloadend = await function () {
    //   const base64data = reader.result;
	  addMessage(audioBlob)
    };
  }

  getStream();

  return (
    <div className="send-box">
      <RiDeleteBin5Line size="1em" color="gray" />

      <div
        id="recordStart"
        className="recordButton"
        onClick={(e) => handleRecord("start")}
      >
        <GiOldMicrophone size="1.5em" color="white" />
      </div>

      <div
        id="recordStop"
        className="recordButton"
        onClick={(e) => handleRecord("stop")}
      >
        <FaStop color="white" />
      </div>
      <BsFillPlayFill size="1em" color="gray" />
    </div>
  );
}
