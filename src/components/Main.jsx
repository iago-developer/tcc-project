import React from "react";
import Logo_git from "./images/logo_git.webp";
import Commit from "./images/commit.png";
import Branch from "./images/branch.png";
import Issue from "./images/issue.png";

export default function Main() {
  const comand_info = (comand, comandName, info) => {
    window.location.href = "#comands";
    const contentTable = document.getElementById("content-table");
    const title = document.createElement("div");
    title.setAttribute("id", "title");

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    const codeArea = document.createElement("div");
    codeArea.setAttribute("id", "codeArea");
    contentTable.innerHTML = "";
    contentTable.appendChild(title);
    contentTable.appendChild(content);
    contentTable.appendChild(codeArea);
    title.innerHTML = `<h1>${comand}</h1><br />`;
    content.innerHTML = `<p>${info}</p>`;
    content.innerHTML += `<hr style='margin-top: 40px; width: 100%;' />`;
    codeArea.innerHTML = `<p><br /> <br /> <br /> <br /> <h1>Exemplo: </h1> <br /> <span style='background-color: #252525; padding: 5px; border-radius: 8px;'><span style='color: purple;'>- $</span> <code>${comandName}</code></span></p>`;
  };

  return (
    <main
      <section id="installations">
        <div
          id="title"
          style={{
            textAlign: "center",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          <h1>Instalação do Git</h1>
        </div>
        <br />
        <br />
        <div id="button-installation">
          <div id="fundo">
            <a
              href="https://git-scm.com/downloads"
              target="_blank"
            >
              Página de Download
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
