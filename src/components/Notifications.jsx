import React from "react";

const ocultarBotoes = () => {
    const buttons = document.querySelector("div.notifications");

    buttons.style.display = "none";
}

const Notifications = () => {
    const requestPermission = () => {
        if("Notification" in window) {
            Notification.requestPermission().then((permissao) => {
                if(permissao === "granted") {
                    new Notification("Git L!", {
                        body: "Bem-Vindo ao  Git L!",
                        icon: "https://via.placeholder.com/50",
                    });
                }
            });

            ocultarBotoes();
        } else {
            alert("O seu navegador não suporta notificações.");
            ocultarBotoes();
        }
    }

    return (
        <div className="notifications">
            <h2>Deseja receber notificações do Git L?</h2>
            <div className="buttons-notification">
                <button onClick={requestPermission}>Aceiar</button>
                <button onClick={ocultarBotoes}>Rejeitar</button>
            </div>
        </div>
    )
}

export default Notifications;