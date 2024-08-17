import React from "react";
import Logo from "./componentes/images/git-logo.png";


export default function App() {
 return (
  <>
   <header>
    <div className="header-title">
      <h1>Git Learning...</h1>
    </div>
    <div className="header-nav">
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Project</li>
        </ul>
      </nav>
    </div>
    <div className="header-buttonH">
      <input type="checkbox" name="buttonH" id="buttonH" />
      <label>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
   </header>
  </>
 )
}