/* JS que tornará dinâmico a saudação  */

const greeting = document.querySelector('.greeting');
/* Pegar a hora do sistema */
const hora = new Date().getHours();

/* Dependendo do horário, irá retornar alguma mensagem */
const mensagem =
    hora >= 5 && hora < 12 ? "Bom dia" : hora >= 12 && hora < 18 ? "Boa Tarde" : hora >= 18 && hora < 23 ? "Boa Noite" : "Boa Madrugada";

/* E irá colocar onde está a class gretting */
greeting.textContent = mensagem;
