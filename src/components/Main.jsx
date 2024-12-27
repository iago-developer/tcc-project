import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo_git from "./images/logo_git.webp";
import Logo from "./images/fundo-git.png";
import Commit from "./images/commit.png";
import Branch from "./images/branch.png";
import Issue from "./images/issue.png";
import Merge from "./images/merge.png";
import Linus from "./images/Linus Torvalds.jpeg";

export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

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

    const title_h1 = document.createElement("h1");
    const style_title_h1 = `
     color: #fff;
    `;
    title_h1.setAttribute("style", style_title_h1);
    title_h1.setAttribute("id", "title_h1");
    title_h1.innerHTML = `${comand} <br /> <br />`;
    title.appendChild(title_h1);

    const p = document.createElement("p");
    p.setAttribute("id", "p");
    p.innerHTML = `${info}`;
    content.appendChild(p);

    const hr = document.createElement("hr");
    const style_hr = `
     margin-top: 40px;
     width: 100%;
    `;
    hr.setAttribute("style", style_hr);
    hr.setAttribute("id", "hr");
    content.appendChild(hr);

    codeArea.innerHTML = `<p><br /> <br /> <br /> <br /> <h1>Exemplo: </h1> <br /> </p>`;

    const code = document.createElement("span");
    const style_code = `
    background-color: #252525; 
    padding: 5px; 
    border-radius: 8px;
    overflow: hidden;
    `;
    code.setAttribute("style", style_code);
    code.setAttribute("id", "code");
    codeArea.appendChild(code);

    const code_content = document.createElement("span");
    const style_code_content = `
    color: purple;
    `;
    code_content.setAttribute("style", style_code_content);
    code_content.setAttribute("id", "code_content");
    code_content.innerHTML = "- $";
    code.appendChild(code_content);

    const code_tag = document.createElement("code");
    const style_code_tag = `
     color: #fff; 
    `;
    code_tag.setAttribute("style", style_code_tag);
    code_tag.setAttribute("id", "code_tag");
    code_tag.innerHTML = ` ${comandName}`;
    code_content.appendChild(code_tag);

    const icon_copy = document.createElement("i");
    const style_icon_copy = `
     border-left: 2px solid gray;
     margin-left: 4px;
     padding: 6px;
     cursor: pointer;
     color: #fff;
     transition: all .3s;
    `;
    icon_copy.setAttribute("style", style_icon_copy);
    icon_copy.setAttribute("class", "fi fi-ss-duplicate");
    icon_copy.setAttribute("id", "icon_copy");
    icon_copy.addEventListener("mouseover", () => {
      icon_copy.style.color = "purple";
    });
    icon_copy.addEventListener("mouseout", () => {
      icon_copy.style.color = "#fff";
    });
    icon_copy.addEventListener("click", async () => {
      var textToCopy = document.getElementById("code_tag");
      try {
        await navigator.clipboard.writeText(textToCopy.textContent);
      } catch (err) {
        console.error("Erro ao copiar: ", err);
      }

      setTimeout(() => {
        icon_copy.style.color = "green";
        icon_copy.setAttribute("class", "fi fi-br-check");
      }, 400);
      setTimeout(() => {
        icon_copy.style.color = "#fff";
        icon_copy.setAttribute("class", "fi fi-ss-duplicate");
      }, 1200);
    });
    code_content.appendChild(icon_copy);
  };

  const up = () => {
    const contentTable = document.querySelector("#content-table");
    const contentList = [
      comand_info(
        "Git init",
        "git init",
        "O <i>git init</i> é o comando responsável pela inicialização de um novo repositório Git em um diretório."
      ),
      comand_info(
        "Git clone [URL]",
        "git clone  <span style='display: inline'>https://github.com/usuario/repositorio.git</span>",
        `O <i>git clone [URL]</i> é o comando responsável pela clonagem de um repositório remoto para o diretório local. <br></br> <strong>Obs: substitua [URL] pela URL de um repositório remoto.</strong>`
      ),
      comand_info(
        "Git clone [URL]",
        "git clone  <span style='display: inline'>https://github.com/usuario/repositorio.git</span>",
        `O <i>git clone [URL]</i> é o comando responsável pela clonagem de um repositório remoto para o diretório local. <br></br> <strong>Obs: substitua [URL] pela URL de um repositório remoto.</strong>`
      )
    ];

    console.log("");
    contentTable.remove("#content");
    contentTable.add(contentList[0]);
  };
  const down = () => {
    const contentTable = document.querySelector("#content-table");
    const contentList = [
      comand_info(
        "Git init",
        "git init",
        "O <i>git init</i> é o comando responsável pela inicialização de um novo repositório Git em um diretório."
      ),
      comand_info(
        "Git clone [URL]",
        "git clone  <span style='display: inline'>https://github.com/usuario/repositorio.git</span>",
        `O <i>git clone [URL]</i> é o comando responsável pela clonagem de um repositório remoto para o diretório local. <br></br> <strong>Obs: substitua [URL] pela URL de um repositório remoto.</strong>`
      ),
      comand_info(
        "Git clone [URL]",
        "git clone  <span style='display: inline'>https://github.com/usuario/repositorio.git</span>",
        `O <i>git clone [URL]</i> é o comando responsável pela clonagem de um repositório remoto para o diretório local. <br></br> <strong>Obs: substitua [URL] pela URL de um repositório remoto.</strong>`
      )
    ];
    
    contentTable.remove("#content");
    contentTable(contentList[1]);
  };

  return (
    <main>
      <section id="introduction">
        <div data-aos="fade-down" className="txt01" id="text">
          <h2>&bull; Definição do Git</h2>
          <br />
          <p>
            O git é um versionador de código e o seu principal objetivo é trazer
            um melhor controle de versões que permite gerenciar alterações em
            arquivos e colaborar em projetos de software.
          </p>
          <br />
          <p>
            Conhecimentos básicos sobre esta ferramenta podem ajudar à aprimorar
            o seu trabalho em equipe!
          </p>
          <br />
        </div>
        <div data-aos="fade-down" className="txt02" id="text">
          <h2>&bull; Origem do Software</h2>
          <br />
          <div
            className="secao-origin"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>
              Desenvolvido no ano de 2005 pelo engenheiro de software finlandês
              Linus Torvalds.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className="right txt03" id="text">
          <h2>&bull; Finalidade do Git Learning</h2>
          <br />
          <p>
            O git learning foi desenvolvido com a tática de ser um guia de
            estudos interativo e prático, Cujo foco é o aprendizado baseado em
            metodologias focadas para estudantes com conhecimentos básicos ou
            até mesmo sem nenhum conhecimento em controle de versão de software.
          </p>
        </div>
        <div id="image" data-aos="fade-down">
          <img src={Logo_git} />
          <h1>Introdução</h1>
        </div>
      </section>
      <section id="installations">
        <div className="box-installations" data-aos="fade-down">
          <div className="text">
            <div
              id="title"
              style={{
                textAlign: "center",
                color: "#fff",
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                fontSize: ".90em",
              }}
            >
              <h1>Instalação</h1>
            </div>
            <br />
            <br />
            <div>
              <p>
                Para instalar o versionador de código git em sua máquina basta
                clicar no link:
              </p>
            </div>
          </div>
          <div id="button-installation" data-aos="fade">
            <h2
              style={{
                gridColumn: 2,
                textAlign: "center",
                color: "#fff",
                font: "Arial, Helvetica, sans-serif",
                fontSize: "1.6rem",
                textShadow: "2px 2px 4px #000",
              }}
            >
              Git
            </h2>
            <div
              className="image-logo-installation"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gridRow: 3,
                gridColumn: 3,
              }}
            >
              <img src={Logo} alt="logo git" width="100" />
            </div>
            <a href="https://git-scm.com/downloads" target="_blank">
              Download
            </a>
          </div>
        </div>
      </section>
      <section id="expressions">
        <br />
        <br />
        <br />
        <div
          id="title"
          style={{
            textAlign: "center",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          <h1>Expressões utilizadas no Git</h1>
        </div>
        <br />
        <br />
        <div id="text-content">
          <div id="text" data-aos="fade-down">
            <div
              id="logo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Branch} style={{ height: "100px", width: "100px" }} />
            </div>
            <h2>Branchs</h2>
            <br />
            <br />
            <p>
              Branches são "ramificações" no sistema de controle de versão (como
              o Git) que permitem que você trabalhe em diferentes versões de um
              projeto ao mesmo tempo.
            </p>
            <br />
          </div>
          <div id="text" data-aos="fade-down">
            <div
              id="logo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Commit} style={{ height: "100px", width: "100px" }} />
            </div>
            <h2>Commits</h2>
            <br />
            <br />
            <p>
              Commits são "snapshots" do código em um determinado ponto no
              tempo. Cada commit inclui as mudanças feitas nos arquivos do
              projeto e uma mensagem explicativa sobre o que foi alterado.
            </p>
          </div>
          <div id="text" data-aos="fade-down">
            <div
              id="logo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Merge} style={{ height: "100px", width: "100px" }} />
            </div>
            <h2>Merges</h2>
            <br />
            <br />
            <p>
              Merge refere-se ao processo de combinar diferentes sequências de
              commits em um único histórico. Essa operação é fundamental para
              integrar alterações feitas em diferentes branches.
            </p>
          </div>
        </div>
      </section>
      <section id="comands">
        <div id="area-comands-table" data-aos="fade-down">
          <div id="comands-table">
            <section id="table-comands">
              <div id="content-table">
                <h1>SELECIONE O COMANDO QUE DESEJA APRENDER.</h1>
              </div>
            </section>
            <section id="table-sidebar">
              <div id="title">
                <h1>Comandos Git</h1>
              </div>
              <br />
              <hr />
              <br />
              <div id="list-comands">
                <ul>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git init",
                          "git init",
                          "O <i>git init</i> é o comando responsável pela inicialização de um novo repositório Git em um diretório."
                        )
                      }
                    >
                      Git init
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git clone [URL]",
                          "git clone  <span style='display: inline'>https://github.com/usuario/repositorio.git</span>",
                          `O <i>git clone [URL]</i> é o comando responsável pela clonagem de um repositório remoto para o diretório local. <br></br> <strong>Obs: substitua [URL] pela URL de um repositório remoto.</strong>`
                        )
                      }
                    >
                      Git clone [URL]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git status",
                          "git status",
                          "O <i>git status</i> é o comando responsável por exibir o status atual do repositório, Mostrando alterações, arquivos preparados e etc."
                        )
                      }
                    >
                      Git status
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git add [arquivo]",
                          "git add index.html",
                          "O <i>git add [arquivo]</i> é o comando responsável por adicionar arquivos ao stage (área de preparação) para o próximo commit.  <br></br> <strong>Obs: substitua [arquivo] pelo nome do arquivo ou caminho para um arquivo dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git add [arquivo]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git commit -m &quot;[mensagem]&quot;",
                          "git commit -m &quot;Corrige bug na função de login&quot;",
                          "O <i>git commit -m &quot;[mensagem]&quot;</i> é o comando responsável por criar um commit com os arquivos do stage, Incluindo uma mensagem descritiva. <br></br> <strong>Obs: substitua [mensagem] por um texto que descreva o que foi alterado no commit, Deve ser claro e conciso.</strong>"
                        )
                      }
                    >
                      Git commit -m &quot;[mensagem]&quot;
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git push [repositório] [branch]",
                          "git push origin main",
                          "O <i>git push [repositório] [branch]</i> é o comando responsável por enviar (fazer push) os commits locais para o repositório remoto.   <br></br> <strong>Obs: substitua [repositório] pelo nome do repositório e substitua [branch] pelo nome de uma branch específica dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git push [repositório] [branch]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git pull",
                          "git pull",
                          "O <i>git pull</i> é o comando responsável pela atualização do repositório local com as alterações do repositório remoto."
                        )
                      }
                    >
                      Git pull
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git branch",
                          "git branch",
                          "O <i>git branch</i> é o comando responsável pela listagem das branches (ramificações) disponíveis no repositório."
                        )
                      }
                    >
                      Git branch
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git checkout [branch]",
                          "git checkout main",
                          "O <i>git checkout [branch]</i> é o comando responsável pela troca para uma branch existente.   <br></br> <strong>Obs: substitua [branch] pelo nome de uma branch específica dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git checkout [branch]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git checkout -b [branch]",
                          "git checkout -b main",
                          "O <i>git checkout -b [branch]</i> é o comando responsável pela criação de uma nova branch e troca para ela.   <br></br> <strong>Obs: substitua [branch] pelo nome de uma branch específica dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git checkout -b [branch]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git merge [branch]",
                          "git merge main",
                          "O <i>git merge [branch]</i> é o comando responsável pela mesclagem das alterações de uma branch específica na branch atual.    <br></br> <strong>Obs: substitua [branch] pelo nome de uma branch específica dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git merge [branch]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git log",
                          "git log",
                          "O <i>git log</i> é o comando responsável pela exibição do histórico de commits do repositório."
                        )
                      }
                    >
                      Git log
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git diff",
                          "git diff",
                          "O <i>git diff</i> é o comando responsável pela exibição das diferenças entre o diretório de trabalho e o stage ou entre commits específicos."
                        )
                      }
                    >
                      Git diff
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git reset [arquivo]",
                          "git reset index.html",
                          "O <i>git reset [arquivo]</i> é o comando responsável pela remoção de arquivos do stage, Mas mantém as alterações no diretório de trabalho. <br></br> <strong>Obs: substitua [arquivo] pelo nome do arquivo ou caminho para um arquivo dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git reset [arquivo]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git rm [arquivo]",
                          "git rm src/main.js",
                          "O <i>git rm [arquivo]</i> é o comando responsável pela remoção de um arquivo do repositório e da área de stage. <br></br> <strong>Obs: substitua [arquivo] pelo nome do arquivo ou caminho para um arquivo dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git rm [arquivo]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git stash",
                          "git stash",
                          "O <i>git stash</i> é o comando responsável pelo salvamento temporário das alterações no diretório de trabalho para que o desenvolvedor possa trabalhar em outra coisa."
                        )
                      }
                    >
                      Git stash
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git stash apply",
                          "git stash apply",
                          "O <i>git stash apply</i> é o comando responsável pela aplicação das alterações salvas anteriormente com git stash."
                        )
                      }
                    >
                      Git stash apply
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git remote add [nome] [URL]",
                          "git remote add origin <span style='display: inline'>https://github.com/usuario/repositorio.git</span>",
                          "O <i>git remote add [nome] [URL]</i> é o comando responsável pela adição de um repositório remoto ao seu repositório local.  <br></br> <strong>Obs: substitue [nome] pelo nome do repositório e substitua [URL] pela URL de um repositório remoto.</strong>"
                        )
                      }
                    >
                      Git remote add [nome] [URL]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git fetch",
                          "git fetch",
                          "O <i>git fetch</i> é o comando responsável pela atualização do repositório local com as alterações do repositório remoto."
                        )
                      }
                    >
                      Git fetch
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git rebase [branch]",
                          "git rebase main",
                          "O <i>git rebase [branch]</i> é o comando responsável pela atualização do repositório local com as alterações do repositório remoto.    <br></br> <strong>Obs: substitua [branch] pelo nome de uma branch específica dentro do repositório.</strong>"
                        )
                      }
                    >
                      Git rebase [branch]
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        comand_info(
                          "Git tag [nome]",
                          "git tag v1.0.0",
                          "O <i>git tag [nome]</i> é o comando responsável pela atualização do repositório local com as alterações do repositório remoto.    <br></br> <strong>Obs: substitua [nome] pelo nome da Tag.</strong>"
                        )
                      }
                    >
                      Git tag [nome]
                    </p>
                  </li>
                </ul>
                <div className="buttons">
                  <button onClick={() => up()}>
                    <i class="fi fi-rr-angle-small-up"></i>
                  </button>
                  <button onClick={() => down()}>
                    <i class="fi fi-rr-angle-small-down"></i>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
