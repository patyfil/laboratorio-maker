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
var capturando = "";

function capturar() {
  capturando = document.getElementById('name').value;
  document.getElementById('../resposta.html#valorDigitado').innerHTML = capturando;
  localStorage.setItem('valorDigitado', capturando);
}




// ********* API DO YOUTUBE *********
// função para criar o mapa
function initMap() {
  const map = new google.maps.Map(document.querySelector('.map iframe'), {
    center: { lat: -27.65235413111738, lng: -48.70587358439508 },
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
    ],
  });
}

// função para criar o player de vídeo
function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'E-y5gTL3iTw',
    playerVars: {
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}
