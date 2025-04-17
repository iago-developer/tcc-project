import React from "react";
import Logo from "../components/images/git-logo.png";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="title">
        <img src={Logo} alt="Logo do Git" width="150" />
        <h1>Learning...</h1>
      </div>
      <br />
      <br />
      <div className="load-area">
        <div className="loader"></div>
      </div>
    </div>
  );
}
