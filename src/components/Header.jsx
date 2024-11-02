import React, { useState } from "react";
import Logo from "./images/git-logo.png";

export default function Header() {

  return (
    <header id="header">
      <div id="header_title">
        <a href="#">
          <img src={Logo} id="logo" />
        </a>
        <br />
        <h2>Learning...</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#history-title"
              id="button-history"
            >
              História
            </a>
          </li>
          <li>
            <a
              href="#installations"
              id="button-installations"
            >
              Instalação
            </a>
          </li>
          <li>
            <a
              href="#expressions"
              id="button-expressions"
            >
              Expressões
            </a>
          </li>
          <li>
            <a href="#comands" id="button-comands">
              Comandos
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              id="button-contacts"
            >
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
