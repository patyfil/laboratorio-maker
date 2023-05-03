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
window.addEventListener('load', () => {
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
});

// ********* scripts para capturar o nome e imprimir na página resposta **********

function capturar() {
  // Pega os valores dos campos do formulário
  var nome = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var telefone = document.querySelector('input[type="tel"]').value;
  var mensagem = document.querySelector('textarea[name="message"]').value;

  // Salva os valores no localStorage
  localStorage.setItem('nome', nome);
  localStorage.setItem('email', email);
  localStorage.setItem('telefone', telefone);
  localStorage.setItem('mensagem', mensagem);
}

// Atualiza o HTML da página de resposta para exibir os valores do formulário
var resposta = document.getElementById('resposta');
var nome = localStorage.getItem('nome');

var email = localStorage.getItem('email');
email = email.toLowerCase();

var telefone = localStorage.getItem('telefone');
var telefone = localStorage.getItem('telefone');
telefone = telefone.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");

var mensagem = localStorage.getItem('mensagem');

nome = nome.toLowerCase().replace(/\b\w/g, function (l) {
  return l.toUpperCase();
});

document.getElementById('nome').innerHTML = nome;
document.getElementById('email').innerHTML = email;
document.getElementById('telefone').innerHTML = telefone;
document.getElementById('mensagem').innerHTML = mensagem;

var emailConfir = email;
document.getElementById('emailConfirm').innerHTML = emailConfir;



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
