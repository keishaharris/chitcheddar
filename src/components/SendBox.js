import React, {useState} from "react";
import "./SendBox.css"
import { GiOldMicrophone } from 'react-icons/gi'; 
import { BsFillPlayFill } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri' 
import { FaStop } from 'react-icons/fa'

//InvalidStateError: Failed to execute 'stop' on 'MediaRecorder': 
//The MediaRecorder's state is 'inactive'.

export default function SendBox(){
	const [audio, setRecord] = useState('inactive');
	const [audioChunks, setAudioChunks] = useState([]);
	// const [audioblob, setAudioBlob] = useState('');
	let rec;
	//   const getStream = () => {
		if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
			alert('Your browser does not support recording!');
		  }
	
		  navigator.mediaDevices
		 .getUserMedia({ audio: true })
		.then((stream) => {
			getRecord(stream);
		 })
	  .catch((err) => console.log("The following gUM error occured: " + err));
	//   }

	//   getStream();

	  function getRecord(stream) {
		rec = new MediaRecorder(stream);
		console.log('stream');
		rec.ondataavailable = (e) => {
			setAudioChunks(audioChunks.push(e.data));
		  console.log("speech",e.data);
		  if (rec.state == "inactive") {
			const audioBlob = new Blob(audioChunks, { type: "video/webm;codecs=opus" });
			console.log('audioblob ', audioBlob);
		//    appendEl('recordedAudio', audioBlob);
		  }
		};
	  }

	  const handleRecord = (e) => {
		  if(audio == 'inactive'){
			console.log('record start', e);
			rec.start();
			setRecord('active');
			console.log('rec state', rec.state);
		  }else if (audio === 'active'){
			console.log('record stop', audio);
			console.log('rec stat2e', rec.state);
			rec.stop();  
			setRecord('inactive');
		  }
	  }

    return (
        <div className="send-box">
         {console.log("aga ", navigator.mediaDevices)}
			<RiDeleteBin5Line size="1em" color="gray"/>

			{/*Record/Send Button */}
			<div id="record" onClick={handleRecord}>
			
			{audio == 'inactive' ? <GiOldMicrophone size="1.5em" color="white"/> : <FaStop color="white"/>}
			</div>

			<BsFillPlayFill size="1em" color="gray"/>
		</div>   
        )
}
