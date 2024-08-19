import React from "react";
import Logo from "./images/git-logo.png";

export default function Header() {
    return(
        <header id="header">
            <img src={Logo} id="logo"/>
            <h2>Learning...</h2>
            <nav>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#contacts">Contact</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <div className="area-button">
             <input type='checkbox' name="button-header" id="button-header" />
             <label htmlFor='button-header'>
                <span></span>
                <span></span>
                <span></span>
             </label>
            </div>
        </header>
    )
}