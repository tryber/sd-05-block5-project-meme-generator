const imgSelecionada = document.getElementById('meme-image');
const textoEntrada = document.getElementById('text-input');
const containerPrincipal = document.getElementById('meme-image-container');
const textoMeme = document.getElementById('meme-text');
const imgInserida = document.getElementById('meme-insert');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme_1');
const meme2 = document.getElementById('meme_2');
const meme3 = document.getElementById('meme_3');
const meme4 = document.getElementById('meme_4');

function textoDeEntrada() {
  if (event.target === textoEntrada)
    textoMeme.innerHTML = textoEntrada.value;
}
