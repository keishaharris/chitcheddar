import React, {useState} from "react";
import "./SendBox.css"
import { GiOldMicrophone } from 'react-icons/gi'; 
import { BsFillPlayFill } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri' 
import { FaStop } from 'react-icons/fa'



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
			console.log('fan ', stream);
			getRecord(stream);
		 })
	  .catch((err) => console.log("The following gUM error occured: " + err));
	//   }
	

	//   getStream();

	  function getRecord(stream) {
		  console.log('as ', stream)
		rec = new MediaRecorder(stream);
		console.log('as1 ', rec.ondataavailable)
		rec.ondataavailable = (e) => {
			console.log("ondataavailable", e.data);
			setAudioChunks(audioChunks.push(e.data));
		  console.log("speech",e.data);
		  if (rec.state == "inactive") {
			const audioBlob = new Blob(audioChunks, { type: "audio/ogg; codecs=opus" });
			console.log('test blob', audioBlob);
			console.log('audioblob ', audioBlob);
		//    appendEl('recordedAudio', audioBlob);
		  }
		};
	  }

	  const handleRecord = (e) => {
		  console.log('start', e)
		//   if(audio == 'inactive'){
		// 	console.log('record start', e);
		// 	rec.start();
		// 	setRecord('active');
		// 	console.log('rec state', rec.state);
		//   }
		//   else{
		//   	setRecord('inactive');
		//   	// getRecord();
		//   }
	  }

    return (
        <div className="send-box">
         {console.log("aga ", navigator.mediaDevices)}
			<RiDeleteBin5Line size="1em" color="gray"/>

			{/*Record/Send Button */}
			<div id="recordStart" className="recordButton" onClick={handleRecord}>
			
			<GiOldMicrophone size="1.5em" color="white"/> 
			</div>
			
			<div id="recordstop" className="recordButton" onClick={(e) => handleRecord}>
			<FaStop color="white"/>
			</div>
			<BsFillPlayFill size="1em" color="gray"/>
		</div>   
        )
}
