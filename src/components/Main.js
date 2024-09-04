import React from "react";
import Header from "./Header";
import Logo from "./images/git-logo.png";
import Logo_git from "./images/logo_git.webp";
import Commit from "./images/commit.png";
import Branch from "./images/branch.png";

export default function Main() {
  const comand_info = (comand, comandName, info) => {
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
    <main>
      <section id="introduction">
        <div id="text">
          <h2>&bull; Definição do Software</h2>
          <br />
          <p>
            O git é um versionador de código, Cujo principal objetivo é trazer
            um melhor controle de versões que permite gerenciar alterações em
            arquivos e colaborar em projetos de software.
          </p>
          <br />
        </div>
        <div id="text">
          <h2>&bull; Origem do Software</h2>
          <br />
          <p>
            Desenvolvido no ano de 2005 pelo engenheiro de software finlandês
            Linus Torvalds.
          </p>
        </div>
        <div className="right" id="text">
          <h2>&bull; Finalidade do guia</h2>
          <br />
          <p>
            O git learning tem como principal objetivo demonstrar alguns
            comandos básicos do Git.
          </p>
        </div>
        <div id="image">
          <img src={Logo_git} />
          <h1>Introdução</h1>
        </div>
      </section>
      <section id="comands">
        <div id="area-comands-table">
          <div id="comands-table">
            <section id="table-comands">
              <div id="content-table">
                <h1>SELECIONE O COMANDO QUE DESEJA APRENDER ➡️</h1>
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
                          "git clone https://github.com/usuario/projeto.git",
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
                          "git remote add origin https://github.com/usuario/repositorio.git",
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
              </div>
            </section>
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
          <div id="text">
            <div id="logo">
              <img src={Branch} style={{ height:'250px', width: "250px" }} />
            </div>
            <h2>Branchs</h2>
            <br />
            <br />
            <p>
             Branches são "ramificações" no sistema de controle de versão (como o Git) que permitem que você trabalhe em diferentes versões de um projeto ao mesmo tempo. 
            </p>
            <br />
          </div>
          <div id="text">
            <div id="logo">
              <img src={Commit} style={{ height:'250px', width: "250px" }} />
            </div>
            <h2>Commits</h2>
            <br />
            <br />
            <p>
              Commits são "snapshots" do código em um determinado ponto no tempo. Cada commit inclui as mudanças feitas nos arquivos do projeto e uma mensagem explicativa sobre o que foi alterado.
            </p>
          </div>
          <div id="text">
            <div id="logo">
              <img src={Commit} style={{ height:'250px', width: "250px" }} />
            </div>
            <h2>Issues</h2>
            <br />
            <br />
            <p>
              Issues são relatórios ou tópicos criados em um repositório (por exemplo, no GitHub) para rastrear tarefas, bugs, melhorias ou discussões relacionadas ao projeto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
