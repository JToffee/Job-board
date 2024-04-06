import React from "react";
import logo from "../../assets/images/logo.png"
import "./header.css"


export default function Logo(){

   
    return (
        <div className="logo">
            <img src={logo} alt="Logo" ></img>
        </div>
    )
}

