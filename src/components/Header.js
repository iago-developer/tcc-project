import React from "react";
import Logo from "./images/git-logo.png";
import Logo_git from "./images/logo_git.webp";

export default function Header() {
  return (
    <header id="header">
      <div id="header_title">
        <img src={Logo} id="logo" />
        <h2>Learning...</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#container">Introdução</a>
          </li>
          <li>
            <a href="#comands">Comandos</a>
          </li>
          <li>
            <a href="#expressions">Expressões</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
