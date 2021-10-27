import React from "react";
import "./SendBox.css"
import { GiOldMicrophone } from 'react-icons/gi'; 
import { BsFillPlayFill } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri' 


export default function SendBox(){
    return (
        <div className="send-box">
			<RiDeleteBin5Line size="1em" color="gray"/>
			<div id="button">
			<GiOldMicrophone size="1.5em" color="white"/>
			</div>
			<BsFillPlayFill size="1em" color="gray"/>
		</div>   
        )
}