import React, { useState } from "react";
import Logo from "./images/git-logo.png";

export default function Header() {
  const button_header = document.querySelector("#button-header");
  // const button_installations = document.querySelector("a#button-installations");
  // const button_expressions = document.querySelector("a#button-expressions");
  // const button_comands = document.querySelector("a#button-comands");
  // const button_contacts = document.querySelector("a#button-contacts");
  
  const [estiloButtonInstallations, setEstilos] = useState({});
  
  const [estiloButtonExpressions, setEstilosExpressions] = useState({});
  
  const [estiloButtonComands, setEstilosComands] = useState({});
  
  const [estiloButtonContacts, setEstilosContacts] = useState({});
  
  const [estiloButtonHeader, setEstilosHeader] = useState({ display: "block" });
  
  const alterarStyleButtonInstallations = () => {
    if (estiloButtonHeader.display == "block") {
      setEstilosHeader({
        display: "block"
      });
      setEstilos({
        opacity: "1",
        marginLeft: "-200px",
        padding: "10px",
      });
      setEstilosExpressions({
        opacity: "1",
        marginLeft: "-100px",
        padding: "10px",
      });
      setEstilosComands({
        opacity: "1",
        marginLeft: "100px",
        padding: "10px",
      });
      
      setEstilosContacts({
        opacity: "1",
        marginLeft: "200px",
        padding: "10px",
      });
    }else if(estiloButtonHeader.display == "block") {
      console.log(estiloButtonHeader.display)
      setEstilosHeader({
        display: "flex"
      });
      setEstilos({
        opacity: "0",
        marginLeft: "0px",
        padding: "0px",
      });
      setEstilosExpressions({
        opacity: "0",
        marginLeft: "0px",
        padding: "0px",
      });
      setEstilosComands({
        opacity: "0",
        marginLeft: "0px",
        padding: "0px",
      });
      
      setEstilosContacts({
        opacity: "0",
        marginLeft: "0px",
        padding: "0px",
      });
    }
  };
  //  button_expressions.style.cssText = "display: block; left: 30%;";
  //  button_comands.style.cssText = "display: block; left: 60%;";
  //  button_contacts.style.cssText = "display: block; left: 75%;";
  return (
    <header id="header">
      <div id="header_title">
        <a href="#container">
          <img src={Logo} id="logo" />
        </a>
        <br />
        <h2>Learning...</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a
              style={estiloButtonInstallations}
              href="#installations"
              id="button-installations"
            >
              Instalação
            </a>
          </li>
          <li>
            <a
              style={estiloButtonExpressions}
              href="#expressions"
              id="button-expressions"
            >
              Expressões
            </a>
          </li>
          <li>
            <div
              id="button-header"
              onClick={alterarStyleButtonInstallations}
              style={estiloButtonHeader}
            >
              <input type="checkbox" name="button" id="button" />
              <label htmlFor="button">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </li>
          <li>
            <a style={estiloButtonComands} href="#comands" id="button-comands">
              Comandos
            </a>
          </li>
          <li>
            <a
              style={estiloButtonContacts}
              href="#contacts"
              id="button-contacts"
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
