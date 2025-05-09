import React, { useState } from "react";
import Logo from "./images/git-logo.png";

export default function Header() {
  return (
    <header id="header">
      <div id="header_title">
        <a href="#" className="link" id="button-introduction">
          <img src={Logo} id="logo" />
        </a>
        <br />
        <h2>Learning...</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#installations" className="link" id="button-installations">
              Instalação
            </a>
          </li>
          <li>
            <a href="#expressions" className="link" id="button-expressions">
              Expressões
            </a>
          </li>
          <li>
            <a href="#comands" className="link" id="button-comands">
              Comandos
            </a>
          </li>
          <li>
            <a href="#integrations" className="link" id="button-integrations">
              Integrações
            </a>
          </li>
          <li>
            <a href="#reports" className="link" id="button-reports">
              Relatos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
