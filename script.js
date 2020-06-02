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

function selecionaBordas() {
  if (event.target === fire)
  {
    containerPrincipal.style.borderColor = 'red';
    containerPrincipal.style.borderWidth = '3px';
    containerPrincipal.style.borderStyle = 'dashed';
  }

  if (event.target === water)
  {
    containerPrincipal.style.borderColor = 'blue';
    containerPrincipal.style.borderWidth = '5px';
    containerPrincipal.style.borderStyle = 'double';
  }

  if (event.target === earth)
  {
    containerPrincipal.style.borderColor = 'green';
    containerPrincipal.style.borderWidth = '6px';
    containerPrincipal.style.borderStyle = 'groove';
  }
}