import React, { useState } from "react";
import Logo from "./images/git-logo.png";

export default function Header() {

  return (
    <header id="header">
      <div id="header_title">
        <a href="#" id="button-introduction">
          <img src={Logo} id="logo" />
        </a>
        <br />
        <h2>Learning...</h2>
      </div>
      <nav>
        <ul>
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
            <a href="#integrations" id="button-integrations">
              Integrações
            </a>
          </li>
          <li>
            <a href="#reports" id="button-reports">
              Relatos              
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
