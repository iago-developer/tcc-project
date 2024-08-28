import React from "react";
import Logo from "./images/git-logo.png";

export default function Main() {
  return (
    <main>
      <section id="introduction">
        <div id="text">
          <h2>- Definição</h2>
          <br />
          <p>
            O git é um versionador de código, Cujo principal objetivo é trazer
            um melhor controle de versões que permite gerenciar alterações em
            arquivos e colaborar em projetos de software.
          </p>
          <br />
        </div>
        <div id="text">
          <h2>- Propósito</h2>
          <br />
          <p>
            O git é um versionador de código, Cujo principal objetivo é trazer
            um melhor controle de versões que permite gerenciar alterações em
            arquivos e colaborar em projetos de software.
          </p>
        </div>
        <div id="image">
          <img src={Logo} />
        </div>
      </section>
    </main>
  );
}
