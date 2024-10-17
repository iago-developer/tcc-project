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
  function pop_up(Interface) {
    const body = document.querySelector("body");
    const area = document.createElement("div");
    const style_area = `
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
    area.setAttribute("style", style_area);
    area.setAttribute("id", "area");
    body.prepend(area);

    const box = document.createElement("div");
    const style_box = `
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
    box.setAttribute("style", style_box);
    box.setAttribute("id", "box");
    area.prepend(box);

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
    button.setAttribute("id", "button-box02");
    button.innerHTML = "<i class='fi fi-br-cross'></i>";
    button.addEventListener("click", () => {
      body.style.overflowY = "";
      body.removeChild(document.querySelector("div#area"));
    });

    header.setAttribute("style", style_header);
    header.setAttribute("id", "header-box");
    header.innerHTML = `Git Teacher *${Interface}*`;
    header.appendChild(button);
    box.appendChild(header);

    const main = document.createElement("div");
    const style_main = `
    background-color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    `;
    main.setAttribute("style", style_main);
    main.setAttribute("id", "main-box");

    const iframe = document.createElement("iframe");
    let style_iframe = `
    height: 100%;
    width: 100%;
    border: none; 
    `;

    if (Interface == "Chatbot") {
      iframe.src =
        "https://console.dialogflow.com/api-client/demo/embedded/ef44a967-0b0f-44e0-9cc1-8a9ff66ae145";
      style_iframe = `height:100%; width: 100%; position: absolute; top: 0;`;
    } else if (Interface == "Tutorial") {
      iframe.src =
        "https://www.youtube.com/embed/Zwv9qRyVeU4?si=ybj3p2o-N9amYdm8";
        const text01 = document.createElement("div");
        const text02 = document.createElement("div");
        const text03 = document.createElement("div");
        const text04 = document.createElement("div");

        const style_text = `
          background-color: #e84d30;
          border-radius: 10px; 
          color: #fff;
          margin: 5px;
          padding: 10px;
        `;
        text01.setAttribute("style", style_text);
        text01.setAttribute("id", "text01");
        text01.innerHTML = "Bem-vindo!";
        main.prepend(text01);

        text02.setAttribute("style", style_text);
        text02.setAttribute("id", "text02");
        text02.innerHTML = "Esta é a seção de Tutoriais, E nela você poderá acessar vídeos tutoriais diretamente da plataforma do YouTube!";
        main.appendChild(text02);
    }

    iframe.allow = "microphone;";
    iframe.setAttribute("style", style_iframe);
    iframe.setAttribute("id", "iframe-box");
    main.appendChild(iframe);

    if(Interface == "Tutorial") {
      const text03 = document.createElement("div");
      const text04 = document.createElement("div");

        const style_text = `
          background-color: #e84d30;
          border-radius: 10px; 
          color: #fff;
          margin: 5px;
          padding: 10px;
        `;

        text03.setAttribute("style", style_text);
        text03.setAttribute("id", "text03");
        text03.innerHTML = "Deseja Voltar?";

        text04.setAttribute("style", style_text);
        text04.setAttribute("id", "text04");
        text04.innerHTML = "Fique à vontade!";

        const iframe02 = document.createElement("iframe");

        iframe02.setAttribute("style", style_iframe);
        iframe02.setAttribute("id", "iframe02");
        iframe02.src = "https://www.youtube.com/embed/RLx63VZ9wSc?si=chyqrYFtx_DbwCww"
    }

    box.appendChild(main);
  }

  return (
    <>
      <div className="container" id="container">
        <br />
        <Header />
        <Main />
        <Footer />
        <div className="buttons">
          <button id="tutorial-button" onClick={() => pop_up("Tutorial")}>
            <i className="fi fi-sc-play"></i>
          </button>
          <button id="chatbot-button" onClick={() => pop_up("Chatbot")}>
            <i className="fi fi-ss-robot"></i>
          </button>
        </div>
      </div>
    </>
  );
}
