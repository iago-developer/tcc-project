import React from "react";
import Logo from "./images/git-logo.png";


export default function Main() {
 return(
  <main>
    <section id="introduction">
      <div id="text">
        <h2>Git</h2>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsa! Ex doloremque itaque maxime voluptatem! Consequuntur similique omnis, quo ducimus illo cum labore, consectetur exercitationem ipsum, laudantium veniam corporis debitis!
        </p>
      </div>

      <img src={ Logo } />
    </section>
  </main>
 )
}