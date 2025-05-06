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
    body.style.overflowY = "visible";
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

  iframe.allow = "microphone;";
  iframe.setAttribute("style", style_iframe);
  iframe.setAttribute("id", "iframe-box");

  const iframe02 = document.createElement("iframe");

  switch (Interface) {
    case "Tutorial":
      iframe.src =
        "https://www.youtube.com/embed/ts-H3W1uLMM?si=1lVHS_7ydnwM5GJz";
      body.prepend(area);
      area.prepend(box);
      box.appendChild(main);
      main.appendChild(iframe);
      break;
    case "Chatbot":
      iframe.src =
        "https://console.dialogflow.com/api-client/demo/embedded/ef44a967-0b0f-44e0-9cc1-8a9ff66ae145";
      style_iframe = `height:100%; width: 100%; position: absolute; top: 0;`;
      body.prepend(area);
      area.prepend(box);
      box.appendChild(main);
      main.appendChild(iframe);
      break;
      case "More":
        const buttons = [...document.querySelectorAll(":not(.button-interface)")];
        const moreButton = document.querySelector("button#more-button")
        const chatBotButton = document.querySelector("button#chatbot-button");
        const tutorialButton = document.querySelector("button#tutorial-button");
        const quizButton = document.querySelector("button#quiz-button");
        const areaButtons = document.querySelector(".buttons");
        tutorialButton.style.gridRow = "1";
        tutorialButton.style.gridColumn = "2";
        chatBotButton.style.gridRow = "2";
        chatBotButton.style.gridColumn = "1";
        quizButton.style.gridRow = "3";
        quizButton.style.gridColumn = "2";
        body.style.overflowY = "visible";
        moreButton.style.opacity = 0;
        buttons.forEach(button => {
          button.addEventListener("mouseenter", () => {
            tutorialButton.style.gridRow = "2";
            tutorialButton.style.gridColumn = "2";
            chatBotButton.style.gridRow = "2";
            chatBotButton.style.gridColumn = "2";
            quizButton.style.gridRow = "2";
            quizButton.style.gridColumn = "2";
            moreButton.style.opacity = 1;
          });
        });
        break;
        case "Quiz":
          window.alert("Quiz")
          body.prepend(area);
          area.prepend(box);
          box.appendChild(main);
          main.appendChild(iframe);
      break;
  }
}

const removeSidebar = () => {
  const body = document.querySelector("body");
  const sessionArea = document.querySelector("div#session-area");
  const buttonSidebar = document.querySelector("button.buttonSidebar");
  const sidebar = document.querySelector("div.sidebar");
  const area = document.querySelector("div#area");
  const reports = document.querySelector("section#reports");
  const i = document.querySelector("button.buttonSidebar>i");
  const pointers = [...document.querySelectorAll("div.pointer")];
  sidebar.style.left = "";
  buttonSidebar.style.left = "0%";
  body.style.overflowY = "";
  if (area != null) {
    body.removeChild(document.querySelector("div#area"));
    sessionArea.style.display = "none";
  }
  reports.style.zIndex = "";
  i.classList.remove("fi-rr-angle-left");
  i.classList.add("fi-rr-angle-right");
  body.style.overflowY = "visible";
};

const sidebar = () => {
  const body = document.querySelector("body");
  const buttonSidebar = document.querySelector("button.buttonSidebar");
  const sidebar = document.querySelector("div.sidebar");
  const area = document.createElement("div");
  const style_area = `
     background-color: rgba(0,0,0,0.8);
     color: #fff;
     height: 1000dvh;
     width: 1000dvw;
     top: 0%;
     position: absolute;
     z-index: 1;
     cursor: pointer; 
     display: flex;
     align-items: start;
     justify-content: end;
     `;
  area.setAttribute("style", style_area);
  area.setAttribute("id", "area");
  const reports = document.querySelector("section#reports");
  const i = document.querySelector("button.buttonSidebar>i");
  const pointers = [...document.querySelectorAll("div.pointer")];

  const pointerSelected = pointers.find((pointer) =>
    pointer.querySelector("img")
  );
  const sessionArea = document.querySelector("div#session-area");
  sessionArea.style.display = "flex";
  const h2 = sessionArea.querySelector("h2");
  pointerSelected.style.opacity = 1;

  sessionArea.addEventListener("click", () => {
    sessionArea.style.display = "none";
    removeSidebar();
  });

  area.addEventListener("click", () => {
    removeSidebar();
  });

  if (sidebar.style.left == "") {
    console.log(sidebar.style.display)
    sidebar.style.left = "0%";
    console.log(sidebar.style)
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
  const body = document.body;
  const sessionArea = document.querySelector("div#session-area");
  sessionArea.style.display = "flex";
  const h2 = sessionArea.querySelector("h2");
  const section = document.querySelector(
    "div#session-area > div#content-session-area > section"
  );
  const line = document.querySelector("div.line");
  const pointers = [...document.querySelectorAll("div.pointer")];
  const img = document.createElement("img");
  const titleSelected = img.nextElementSibling;
  img.setAttribute("src", "./naveIcone.avif");
  img.setAttribute("id", "imgNave");
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
    titleSelected.style.color = "#fff";

    switch (titleSelected.innerHTML) {
      case "Introdução":
        let buttonIntroduction = document.querySelector("#button-introduction");
        h2.innerHTML = titleSelected.innerHTML;
        section.innerHTML = `
          <p>Nesta seção serão abordados temas como:</p>
          <p>Definição e Origem do <i>Software</i> a ser estudado e também a finalidade do nosso guia de estudos online.</p>
          <br />
          <p>Por meio de blocos de texto interativos que servem para introduzir a apresentação do <i>software</i> ao estudante.</p>
      `;
        buttonIntroduction.click();
        break;
      case "Instalação":
        let buttonInstallations = document.querySelector(
          "#button-installations"
        );
        h2.innerHTML = titleSelected.innerHTML;
        section.innerHTML = `
          <p>O foco desta seção é fornecer um link que redirecionará o usuário para a página oficial de instalação do <i>Git</i>.</p>
          <br />
          <p>O usuário precisará apenas seguir as orientações repassadas pela página oficial do instalador, para realizar a instação em sua máquina de forma segura e totalmente gratuita.</p>
        `;
        buttonInstallations.click();
        break;
      case "Expressões":
        let buttonExpressions = document.querySelector("#button-expressions");
        h2.innerHTML = titleSelected.innerHTML;
        section.innerHTML = `
        <p>A seção de Expressões irá apresentar ao usuário algumas palavras-chave utilizadas pelo <i>Git</i>, que podem ser de difícil entendimento.</p>
        <br />
        <p>É importante enfatizar ao desenvolvedor que irá utilizar desta ferramenta, que ele precisa conhecê-la bem e também dominar o uso de certas expressões que irá utilizar em seu cotidiano profissional.</p>
      `;
        buttonExpressions.click();
        break;
      case "Comandos":
        let buttonComands = document.querySelector("#button-comands");
        h2.innerHTML = titleSelected.innerHTML;
        section.innerHTML = `
        <p>Na seção de comandos, uma pequena tabela dividida em duas seções será apresentada.</p>
        <br />
        <p>A primeira seção é a lista de comandos <i>Git</i>, nesta seção o usuário poderá selecionar o comando que deseja aprender.</p>
        <br />
        <p>A segunda seção é a tela de carregamento, sua atribuição é demonstrar para o usuário instruções sobre o comando selecionado e o exemplo prático do comando em ação.</p>
      `;
        buttonComands.click();
        break;
      case "Integrações":
        let buttonIntegrations = document.querySelector("#button-integrations");
        h2.innerHTML = titleSelected.innerHTML;
        section.innerHTML = `
        <p>Aqui teremos alguns exemplos de aplicações ou plataformas cujo o <i>Git</i> possui algumas integrações.</p>
        <br />
        <p>Os blocos de texto possuem a logo que identifica a aplicação e um pequeno texto descritivo sobre ela.</p>
      `;
        buttonIntegrations.click();
        break;
      case "Relatos":
        let buttonReports = document.querySelector("#button-reports");
        h2.innerHTML = titleSelected.innerHTML;
        section.innerHTML = `
        <p>Na seção de relatos, apresentamos alguns feedbacks coletados dos nossos usuários.</p>
        <br />
        <p>Estamos sempre abertos para críticas construtivas para continuar aprimorando a nossa entrega de conteúdo aos nossos usuários!</p>
        <br />
        <p>Nos envie sua crítica a partir do seguinte link: https://site.com.</p>
      `;
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
  if (intro.style.display == "") {
    const visible = () => {
      body.style.overflowY = "visible";
    };
    setTimeout(visible, 3000);
  } else {
    body.style.overflowY = "";
  }
  const skipIntro = () => {
    const intro = document.querySelector("div.intro");
    intro.style.opacity = "0%";
  };
  setTimeout(skipIntro, 3000);
  const removeIntro = () => {
    const intro = document.querySelector("div.intro");
    intro.style.display = "none";
  };
  setTimeout(removeIntro, 3400);
};

export default function App() {
  return (
    <>
      <div className="container" id="container" onLoad={() => intro()}>
        <br />
        {<Intro />}
        <div id="session-area">
          <div id="title-session-area">
            <h2>Introdução</h2>
            <hr />
          </div>
          <div id="content-session-area">
            <section id="content-session-area-section">
              <p>Nesta seção serão abordados temas como:</p>
              <p>
                Definição e Origem do <i>Software</i> a ser estudado e também a
                finalidade do nosso guia de estudos online.
              </p>
              <br />
              <p>
                Por meio de blocos de texto interativos que servem para
                introduzir a apresentação do <i>software</i> ao estudante.{" "}
              </p>
            </section>
          </div>
        </div>
        <Header />
        <Main />
        <Footer />
        <div className="sidebar">
          <header>
            <h2>Mapa de Navegação</h2>
          </header>
          <section class="sectionSidebar">
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
        <div className="buttons button-interface">
          <button class="button-interface" id="more-button" onClick={() => pop_up("More")}>
            <i class="fi fi-sr-add button-interface"></i>
          </button>
          <button class="button-interface" id="tutorial-button" onClick={() => pop_up("Tutorial")}>
            <i className="fi fi-sc-play button-interface"></i>
          </button>
          <button class="button-interface" id="chatbot-button" onClick={() => pop_up("Chatbot")}>
            <i className="fi fi-ss-robot button-interface"></i>
          </button>
          <button class="button-interface" id="quiz-button" onClick={() => pop_up("Quiz")}>
            <i class="fi fi-ss-comments-question button-interface"></i>
          </button>
        </div>
      </div>
    </>
  );
}
