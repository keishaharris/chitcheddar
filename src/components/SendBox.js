import React, {useState} from "react";
import "./SendBox.css"
import { GiOldMicrophone } from 'react-icons/gi'; 
import { BsFillPlayFill } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri' 
import { FaStop } from 'react-icons/fa'


const appendElement = (classNm, content) => {
	let messages = document.getElementById('messages');
	const node = document.createElement("DIV");
	if (classNm == "sender") {
		let audio = document.createElement('audio');
		audio.controls = true;
		audio.autoplay = true;
		node.appendChild(audio);
		messages.appendChild(node)
	}

	
}

export default function SendBox(){

	let MediaRecorder;

	const [audioChunks, setAudioChunks] = useState([]);
	// const [audioblob, setAudioBlob] = useState('');
	// let rec;
	  const getStream = () => {
		if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
			alert('Your browser does not support recording!');
		}
	
		  navigator.mediaDevices
		 .getUserMedia({ audio: true })
		.then((stream) => {
			console.log('stream ', stream);
			MediaRecorder = new MediaRecorder(stream);
		 })
	  .catch((err) => console.log("The following gUM error occured: " + err));
	  }
	

	  getStream();

	//   function getRecord() {
	// 	MediaRecorder.ondataavailable = (e) => {
	// 		console.log("ondataavailable", e.data);
	// 		setAudioChunks(audioChunks.push(e.data));
			
	// 	  if (MediaRecorder.state == "inactive") {
			  
	// 		const audioBlob = new Blob(audioChunks, { type: "audio/ogg; codecs=opus" });
	// 		console.log('audioblob ', audioBlob);
	// 		appendElement('sender', audioBlob);
	// 	//   appendEl('recordedAudio', audioBlob);
	// 	  }
	// 	};
	//   }

	async function sendData(audioBlob) {
		let base64data;
		const reader = new window.FileReader();
		await reader.readAsDataURL(audioBlob);
		reader.onloadend = await function() {
			base64data=reader.result;

			console.log("base", base64data)
		};
	}

	  const handleRecord = (e) => {
		  console.log('event', e)
		  if(e === 'active'){
			//  console.log('start', MediaRecorder)
			MediaRecorder.start();
		  }
		//   else{
		// 	// console.log('rec state ', MediaRecorder.state)
		// 	MediaRecorder.stop();
		// 	MediaRecorder.ondataavailable = (e) => {
		// 		console.log("ondataavailable", e.data);
		// 		setAudioChunks(audioChunks.push(e.data));
				
		// 	  if (MediaRecorder.state == "inactive") {
				  
		// 		const audioBlob = new Blob(audioChunks, { type: "audio/ogg; codecs=opus" });
		// 		console.log('audioblob ', audioBlob);
		// 		appendElement('sender', audioBlob);
		//		sendData(audioBlob)
		// 	//   appendEl('recordedAudio', audioBlob);
		// 	  }
		// 	};
		//   }
	  }

    return (
        <div className="send-box">
         {console.log("aga ", navigator.mediaDevices)}
			<RiDeleteBin5Line size="1em" color="gray"/>

			{/*Record/Send Button */}
			<div id="recordStart" className="recordButton" onClick={(e) => handleRecord("active")}>
			
			<GiOldMicrophone size="1.5em" color="white"/> 
			</div>
			
			<div id="recordStop" className="recordButton" onClick={(e) => handleRecord("inactive")}>
			<FaStop color="white"/>
			</div>
			<BsFillPlayFill size="1em" color="gray"/> 
		</div>   
        )
}
