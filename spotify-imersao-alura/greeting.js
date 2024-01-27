const greeting = document.querySelector('.greeting');
const hora = new Date().getHours();

const mensagem =
    hora >= 5 && hora < 12 ? "Bom dia" : hora >= 12 && hora < 18 ? "Boa Tarde" : hora >= 18 && hora < 23 ? "Boa Noite" : "Boa Madrugada";

greeting.textContent = mensagem;
