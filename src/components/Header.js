import React from "react";
import "./Header.css"


export default function Header(){
    return (
        <div className="header">
			<div className="header__left">
			<img className="user-icon" src="usericon.jpeg" alt="user icon" />
			<div className="user-info">
				<span >Full Name </span>
				<p>Online </p>
			</div>
			</div>
		</div>
    );
}