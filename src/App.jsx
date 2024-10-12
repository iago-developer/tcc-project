import React from "react";
import "./App.css";
import "./medias/Mobile.css";
import "./medias/Laptop.css";
import "./medias/Desktop.css";
import "./medias/Smart.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  function chatbot() {
    const body = document.querySelector("body");
    const chat_area = document.createElement("div");
    const style_chat_area = `
         background-color: rgba(0,0,0,0.9);
         color: #fff;
         height: 100vh;
         width: 100vw;
         position: fixed;
         z-index:2;
         display: flex;
         align-items: center;
         justify-content: center;
        `;
    body.style.overflowY = "hidden";
    chat_area.setAttribute("style", style_chat_area);
    chat_area.setAttribute("id", "chat_area");
    body.prepend(chat_area);

    const chatbot = document.createElement("div");
    const style_chatbot = `
         background-color: #fff;
         border-radius: 20px;
         height: 600px;
         width: 90%;
         color: #000;
         display: grid;
         grid-template-rows: 120px 1fr;
         overflow: hidden;
         position: relative;
        `;
    chatbot.setAttribute("style", style_chatbot);
    chatbot.setAttribute("id", "chatbot");
    chat_area.prepend(chatbot);

    const header = document.createElement("div");
    const style_header = `
         background-color: #e84d30;
         color: #fff;
         font-size: 1.2em;
         font-weight: bold;
         padding: 30px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         flex-direction: row;
         z-index: 2;
        `;
    const button = document.createElement("span");
    const style_button = `
         font-weight: bold;
         cursor: pointer;
         transition: all .6s;
        `;

    button.setAttribute("style", style_button);
    button.setAttribute("id", "button-chatbot02");
    button.innerHTML = "<i class='fi fi-br-cross'></i>";
    button.addEventListener("click", () => {
      body.style.overflowY = "";
      body.removeChild(document.querySelector("#chat_area"));
    });

    header.setAttribute("style", style_header);
    header.setAttribute("id", "header-chatbot");
    header.innerHTML = "Git Teacher";
    header.appendChild(button);
    chatbot.appendChild(header);

    const main = document.createElement("div");
    const style_main = `
    background-color: #fff;
    padding: 30px;
    `;
    main.setAttribute("style", style_main);
    main.setAttribute("id", "main-chatbot");

    const iframe = document.createElement("iframe");
    const style_iframe = `
     height: 100%;
     width: 100%;
     position: absolute;
     top: 0%;
     left: 0%;
    `;
    iframe.src = "https://console.dialogflow.com/api-client/demo/embedded/ef44a967-0b0f-44e0-9cc1-8a9ff66ae145";
    iframe.allow = "microphone;";
    iframe.setAttribute("style", style_iframe);
    iframe.setAttribute("id", "iframe");
    main.appendChild(iframe);

    chatbot.appendChild(main);
  }

  return (
    <>
      <div className="container" id="container">
        <br />
        <Header />
        <Main />
        <Footer />
        <button id="chatbot-button" onClick={() => chatbot()}>
          <i class="fi fi-ss-robot"></i>
        </button>
      </div>
    </>
  );
}
