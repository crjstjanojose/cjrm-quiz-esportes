const gabarito = ["B", "A", "A", "B"];
const painelResultado = document.querySelector("[data-js='painel']");
const progressbar = document.querySelector("[data-js='progressbar']");
const btnenviar = document.querySelector("[data-js='btnenviar']");
const btnreiniciar = document.querySelector("[data-js='btnreiniciar']");
const form = document.querySelector("[data-js='formquiz']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let pontuacao = 0;

  const respostasRecebidas = [
    form.radioquestion1.value,
    form.radioquestion2.value,
    form.radioquestion3.value,
    form.radioquestion4.value,
  ];

  respostasRecebidas.forEach((item, index) => {
    if (item === gabarito[index]) {
      pontuacao += 25;
    }
  });

  scrollTo(0, 0);

  painelResultado.classList.remove("d-none");

  progressbar.textContent = `${pontuacao} %`;
  progressbar.style.width = `${pontuacao}%`;

  btnenviar.classList.add("d-none");
  btnreiniciar.classList.remove("d-none");
});

btnreiniciar.addEventListener("click", () => {
  resetQuiz();
});

const resetQuiz = () => {
  painelResultado.classList.add("d-none");
  btnenviar.classList.remove("d-none");
  btnreiniciar.classList.add("d-none");
  progressbar.style.width = `0%`;
};
