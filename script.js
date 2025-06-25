// Dias juntos
const dataInicio = new Date("2024-06-27");
const hoje = new Date();
const diferenca = hoje - dataInicio;
const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
document.getElementById("dias-juntos").textContent = `${dias} dias`;

// Carta digitada
const texto = "Meu amor, hoje completamos 1 ano dessa jornada linda. Cada sorriso ao teu lado é um presente. Te amo mais do que tudo! ❤️";
let i = 0;
function escreverCarta() {
  if (i < texto.length) {
    document.getElementById("carta").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escreverCarta, 50);
  }
}
escreverCarta();

// Quiz
let acertos = 0;
let total = 0;
function responder(botao, certo) {
  total++;
  if (certo) {
    acertos++;
    botao.style.backgroundColor = "#4CAF50";
  } else {
    botao.style.backgroundColor = "#F44336";
  }
  botao.disabled = true;
  if (total === 4) {
    const msg = acertos >= 3 ? "Você me conhece muito bem! 🥰" : "Vamos conversar mais sobre nós! 💬";
    document.getElementById("resultadoQuiz").innerText = msg;
  }
}