import React from "react";
import Logo from "./images/git-logo.png";
import Logo_git from "./images/logo_git.webp";

export default function Main() {
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
            comandos básicos do Git{" "}
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
              
            </section>
            <section id="table-sidebar">
              <div id="title">
                <h1>Comandos Git</h1>
              </div>
              <br />
              <div id="list-comands">
                <ul>
                  <li><a href="#">Git add</a></li>
                  <li><a href="#">Git commit</a></li>
                  <li><a href="#">Git pull</a></li>
                  <li><a href="#">Git push</a></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div id="text">
          <br id="contacts" />
          <br />
          <br />
          <h2 id="contacts">&bull; Definição</h2>
          <br />
          <p>
            O git é um versionador de código, Cujo principal objetivo é trazer
            um melhor controle de versões que permite gerenciar alterações em
            arquivos e colaborar em projetos de software.
          </p>
          <br />
        </div>
        <div id="text">
          <h2>&bull; Origem</h2>
          <br />
          <p>
            Desenvolvido no ano de 2005 pelo engenheiro de software finlandês
            Linus Torvalds.
          </p>
        </div>
        <div className="right" id="text">
          <h2>&bull; Propósito</h2>
          <br />
          <p>
            O git é um versionador de código, Cujo principal objetivo é trazer
            um melhor controle de versões que permite gerenciar alterações em
            arquivos e colaborar em projetos de software.
          </p>
        </div>
      </section>
    </main>
  );
}
