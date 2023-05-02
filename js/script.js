// ********************* scripts do menu sanduíche *********************
// constante para armazenar o valor
const btnMobile = document.getElementById("btn-mobile");

// função para ver se o menu foi apertado - se for apertado aparece o X e abre o menu
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// ********************* scripts da galeria de fotos *********************
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const indicators = document.querySelectorAll('.indicator');

let index = 0;

function slide() {
  index++;

  if (index > images.length - 1) {
    index = 0;
  }

  carousel.style.transform = `translateX(-${index * 25}%)`;

  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });

  indicators[index].classList.add('active');
}

setInterval(slide, 4000);

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    index = i;
    carousel.style.transform = `translateX(-${index * 25}%)`;

    indicators.forEach((indicator) => {
      indicator.classList.remove('active');
    });

    indicators[index].classList.add('active');
  });
});

// ********* scripts para capturar o nome e imprimir na página resposta **********
// essa não consegui fazer funcionar ainda prof rsrs, tenho que descobrir como imprimir em outro html
var capturando = "";

function capturar() {
  capturando = document.getElementById('name').value;
  document.getElementById('../resposta.html#valorDigitado').innerHTML = capturando;
  localStorage.setItem('valorDigitado', capturando);
}