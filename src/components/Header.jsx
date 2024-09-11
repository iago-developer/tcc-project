import React, { useState } from "react";
import Logo from "./images/git-logo.png";

export default function Header() {
  // const button_header = document.querySelector("#button-header");
  // const button_installations = document.querySelector("a#button-installations");
  // const button_expressions = document.querySelector("a#button-expressions");
  // const button_comands = document.querySelector("a#button-comands");
  // const button_contacts = document.querySelector("a#button-contacts");

  const [
    estiloButtonInstallations,
    setEstilos,
  ] = useState({ });

  const [
    estiloButtonExpressions,
    setEstilosExpressions,
  ] = useState({ });

  const [
    estiloButtonComands,
    setEstilosComands,
  ] = useState({ });

  const [
    estiloButtonContacts,
    setEstilosContacts,
  ] = useState({ });

  const alterarStyleButtonInstallations = () => {
    setEstilos({
      display: "block",
      left: "15%",
      //  button_expressions.style.cssText = "display: block; left: 30%;";
      //  button_comands.style.cssText = "display: block; left: 60%;";
      //  button_contacts.style.cssText = "display: block; left: 75%;";
    
    const alterarStyleButtonExpressions = () => {
      setEstilos({
        display: "block",
        left: "35%",
      });
    }
    const alterarStyleButtonComands = () => {
      setEstilos({
        display: "block",
        left: "60%",
      });
    }
    const alterarStyleButtonContacts = () => {
      setEstilos({
        display: "block",
        left: "75%",
      });
    }
  });
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
            <div id="button-header" onClick={alterarStyleButtonInstallations}>
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
