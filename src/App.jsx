import React from "react";
import "./App.css";
import "./medias/Mobile.css";
import "./medias/Laptop.css";
import "./medias/Desktop.css";
import "./medias/Smart.css";
import Intro from "./components/Intro.jsx";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NaveIcone from "./naveIcone.avif";

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
  const buttonSidebar = document.querySelector("button.buttonSidebar");
  const reports = document.querySelector("section#reports");

  body.style.overflowY = "hidden";
  area.setAttribute("style", style_area);
  area.setAttribute("id", "area");
  body.prepend(area);
  buttonSidebar.style.zIndex = "0";
  reports.style.zIndex = "0";

  const box = document.createElement("div");
  const style_box = `
  background-color: #fff;
  border-radius: 16px;
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
    buttonSidebar.style.zIndex = "";
    reports.style.zIndex = "";
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
      "https://www.youtube.com/embed/ts-H3W1uLMM?si=1lVHS_7ydnwM5GJz";
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

    text02.setAttribute("style", style_text);
    text02.setAttribute("id", "text02");
    text02.innerHTML =
      "Esta é a seção de Tutoriais, E nela você poderá acessar vídeos tutoriais diretamente da plataforma do YouTube!";
  }

  iframe.allow = "microphone;";
  iframe.setAttribute("style", style_iframe);
  iframe.setAttribute("id", "iframe-box");
  main.appendChild(iframe);

  if (Interface == "Tutorial") {
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
    iframe02.src =
      "https://www.youtube.com/embed/RLx63VZ9wSc?si=chyqrYFtx_DbwCww";
  }

  box.appendChild(main);
}

const removeSidebar = () => {
  const body = document.querySelector("body");
  const buttonSidebar = document.querySelector("button.buttonSidebar");
  const sidebar = document.querySelector("div.sidebar");
  const area = document.createElement("div");
  const style_area = `
     background-color: rgba(0,0,0,0.8);
     height: 1000dvh;
     width: 1000dvw;
     top: 0%;
     position: absolute;
     z-index: 1;
    `;
  area.setAttribute("style", style_area);
  area.setAttribute("id", "area");
  const reports = document.querySelector("section#reports");
  const i = document.querySelector("button.buttonSidebar>i");
  const pointers = [...document.querySelectorAll("div.pointer")];
  sidebar.style.left = "";
  buttonSidebar.style.left = "0%";
  body.style.overflowY = "";
  body.removeChild(document.querySelector("div#area"));
  reports.style.zIndex = "";
  i.classList.remove("fi-rr-angle-left");
  i.classList.add("fi-rr-angle-right");
};

const sidebar = () => {
  const body = document.querySelector("body");
  const buttonSidebar = document.querySelector("button.buttonSidebar");
  const sidebar = document.querySelector("div.sidebar");
  const area = document.createElement("div");
  const style_area = `
     background-color: rgba(0,0,0,0.8);
     height: 1000dvh;
     width: 1000dvw;
     top: 0%;
     position: absolute;
     z-index: 1;
    `;
  area.setAttribute("style", style_area);
  area.setAttribute("id", "area");
  const reports = document.querySelector("section#reports");
  const i = document.querySelector("button.buttonSidebar>i");
  const pointers = [...document.querySelectorAll("div.pointer")];

  const pointerSelected = pointers.find((pointer) =>
    pointer.querySelector("img")
  );
  pointerSelected.style.opacity = 1;

  area.addEventListener("click", () => {
    removeSidebar();
  });

  if (sidebar.style.left == "") {
    sidebar.style.left = "0%";
    buttonSidebar.style.left = "380px";
    body.style.overflowY = "hidden";
    body.appendChild(area);
    reports.style.zIndex = "0";
    i.classList.remove("fi-rr-angle-right");
    i.classList.add("fi-rr-angle-left");
  } else {
    removeSidebar();
  }
};

const naveMove = (event) => {
  const line = document.querySelector("div.line");
  const pointers = [...document.querySelectorAll("div.pointer")];
  const img = document.createElement("img");
  img.setAttribute("src", "./naveIcone.avif");
  img.style.width = "50px";
  img.style.opacity = 0;

  const pointerSelected = pointers.find((pointer) =>
    pointer.querySelector("img")
  );
  const pointerClicked = event.target;
  const naveID = document.querySelector("#nave");
  const positionPointerClicked = pointerClicked.offsetTop;
  const positionNaveID = naveID.offsetTop;

  naveID.style.top = `${positionPointerClicked - 20}px`;
  if (positionPointerClicked > positionNaveID) {
    naveID.style.cssText += "transform: rotate(180deg);";
  } else if (positionPointerClicked < positionNaveID) {
    naveID.style.cssText += "transform: rotate(0deg);";
  }

  pointerSelected.removeChild(pointerSelected.querySelector("img"));
  pointerClicked.insertBefore(img, pointerClicked.children[1]);

  if (img && img.nextElementSibling) {
    const titleSelected = img.nextElementSibling;
    const titles = [...document.querySelectorAll("div.pointer > h4")];
    titles.forEach((title) => {
      title.style.color = "#000";
    });
    console.log(titleSelected);
    titleSelected.style.color = "#fff";

    switch (titleSelected.innerHTML) {
      case "Introdução":
        let buttonIntroduction = document.querySelector("#button-introduction");
        buttonIntroduction.click();
        break;
      case "Instalação":
        let buttonInstallations = document.querySelector(
          "#button-installations"
        );
        buttonInstallations.click();
        break;
      case "Expressões":
        let buttonExpressions = document.querySelector("#button-expressions");
        buttonExpressions.click();
        break;
      case "Comandos":
        let buttonComands = document.querySelector("#button-comands");
        buttonComands.click();
        break;
      case "Integrações":
        let buttonIntegrations = document.querySelector("#button-integrations");
        buttonIntegrations.click();
        break;
      case "Relatos":
        let buttonReports = document.querySelector("#button-reports");
        buttonReports.click();
        break;
    }
  } else {
    const titleSelected = img.previousElementSibling;
    const titles = [...document.querySelectorAll("div.pointer > h4")];
    const title01 = titles[0];
    title01.style.color = "#fff";
    titleSelected.style.color = "#000";
  }
};

const intro = () => {
  const body = document.querySelector("body");
  const intro = document.querySelector("div.intro");
  console.log(intro.style.display)
  if(intro.style.display == "") {
    const hidden = () => {
      body.style.overflow = "hidden";
    }

    setTimeout(hidden, 3000);
  }else {
    body.style.overflow = "";
  }
  const skipIntro = () => {
    const intro = document.querySelector("div.intro");
    intro.style.opacity = "0%";
  }
  setTimeout(skipIntro, 3000);
  const removeIntro = () => {
    const intro = document.querySelector("div.intro");
    intro.style.display = "none";
  }
  setTimeout(removeIntro, 3400)
};

export default function App() {
  return (
    <>
      <div className="container" id="container" onLoad={() => intro() }>
        <br />
        <Intro />
        <Header />
        <Main />
        <Footer />
        <div className="sidebar">
          <header>
            <h2>Mapa de Navegação</h2>
          </header>
          <section>
            <div className="line">
              <div className="pointer " onClick={(event) => naveMove(event)}>
                <h4 style={{ opacity: 0 }}>Introdução</h4>
                <img src={NaveIcone} width="50px" />
                <h4 style={{ color: "#fff" }}>Introdução</h4>
              </div>
              <img src={NaveIcone} width="50px" id="nave" />
              <div className="pointer " onClick={(event) => naveMove(event)}>
                <h4 style={{ opacity: 0 }}>Instalação</h4>
                <h4>Instalação</h4>
              </div>
              <div className="pointer" onClick={(event) => naveMove(event)}>
                <h4 style={{ opacity: 0 }}>Expressões</h4>
                <h4>Expressões</h4>
              </div>
              <div className="pointer" onClick={(event) => naveMove(event)}>
                <h4 style={{ opacity: 0 }}>Comandos</h4>
                <h4>Comandos</h4>
              </div>
              <div className="pointer" onClick={(event) => naveMove(event)}>
                <h4 style={{ opacity: 0 }}>Integrações</h4>
                <h4>Integrações</h4>
              </div>
              <div className="pointer" onClick={(event) => naveMove(event)}>
                <h4 style={{ opacity: 0 }}>Relatos</h4>
                <h4>Relatos</h4>
              </div>
            </div>
          </section>
        </div>
        <button className="buttonSidebar" onClick={() => sidebar()}>
          <i class="fi fi-rr-angle-right"></i>
        </button>
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
