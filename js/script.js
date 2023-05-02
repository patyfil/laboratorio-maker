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
// variável para o contador que soma +1 a cada laço, se o contador for maior que 4, fecha o laço e retorna
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);


// ********* scripts para capturar o nome e imprimir na página resposta **********
// essa não consegui fazer funcionar ainda prof rsrs, tenho que descobrir como imprimir em outro html
var capturando = "";

function capturar() {
  capturando = document.getElementById('name').value;
  document.getElementById('../resposta.html#valorDigitado').innerHTML = capturando;
  localStorage.setItem('valorDigitado', capturando);
}