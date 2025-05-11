
let campanhaAtiva = ''; 

function toggleFavorito(campanha) {
  const botao = document.getElementById(`heart-btn-${campanha}`);

  if (botao.classList.contains('clicado')) {
    removeFav(campanha);
  } else {
    abrirPopup(campanha);
  }
}

function abrirPopup(campanha) {
  campanhaAtiva = campanha;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";

  const botao = document.getElementById(`heart-btn-${campanhaAtiva}`);
  if (botao && !botao.classList.contains('clicado')) {
    botao.classList.add('clicado');
  }
}

function removeFav(campanha) {
  const botao = document.getElementById(`heart-btn-${campanha}`);
  if (botao && botao.classList.contains('clicado')) {
    botao.classList.remove('clicado');
  }
}


