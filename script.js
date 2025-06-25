
function iniciarSite() {
  const hora = new Date().getHours();
  if (hora >= 18 || hora <= 6) {
    document.body.classList.remove('tema-dia');
    document.body.classList.add('tema-noite');
  }

  const dataInicio = new Date("2024-06-27");
  const hoje = new Date();
  const diff = hoje - dataInicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("dias-juntos").textContent = `${dias} dias`;

  const marco = new Date("2025-09-27");
  const restante = Math.floor((marco - hoje) / (1000 * 60 * 60 * 24));
  document.getElementById("proximo-marco").textContent = `${restante} dias restantes`;
}

function abrirPresente() {
  document.getElementById("tela-presente").style.display = "none";
  document.getElementById("conteudo-site").style.display = "block";
  mostrarSlides();
}

let slideIndex = 0;
function mostrarSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlides, 3000);
}
