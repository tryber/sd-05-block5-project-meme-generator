const imgSelecionada = document.getElementById('meme-image');
const textoEntrada = document.getElementById('text-input');
const containerPrincipal = document.getElementById('meme-image-container');
const textoMeme = document.getElementById('meme-text');
const imgInserida = document.getElementById('meme-insert');
//const btnFire = document.getElementById('fire');
//const btnWater = document.getElementById('water');
//const btnEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

/*function textoDeEntrada() {
  if (event.target === textoEntrada) {
    textoMeme.innerHTML = textoEntrada.value;
  }
}*/

function selecionaBordas() {
  if (event.target === fire) {
    containerPrincipal.style.borderColor = 'red';
    containerPrincipal.style.borderWidth = '3px';
    containerPrincipal.style.borderStyle = 'dashed';
  }

  if (event.target === water) {
    containerPrincipal.style.borderColor = 'blue';
    containerPrincipal.style.borderWidth = '5px';
    containerPrincipal.style.borderStyle = 'double';
  }

  if (event.target === earth) {
    containerPrincipal.style.borderColor = 'green';
    containerPrincipal.style.borderWidth = '6px';
    containerPrincipal.style.borderStyle = 'groove';
  }
}

function selecionaMeme1() {
  imgSelecionada.src = 'imgs/meme1.png';
}

function selecionaMeme2() {
  imgSelecionada.src = 'imgs/meme2.png';
}

function selecionaMeme3() {
  imgSelecionada.src = 'imgs/meme3.png';
}

function selecionaMeme4() {
  imgSelecionada.src = 'imgs/meme4.png';
}

function imgClicada() {
  if (event.target === meme1)
    selecionaMeme1();

  if (event.target === meme2)
    selecionaMeme2();

  if (event.target === meme3)
  selecionaMeme3();

  if (event.target === meme4)
    selecionaMeme4();
}

textoEntrada.addEventListener('keyup', function () {
  textoMeme.innerHTML = textoEntrada.value;
});

imgInserida.addEventListener('input', function () {
  imgSelecionada.src = URL.createObjectURL(this.files[0]);
});

fire.addEventListener('click', selecionaBordas);
water.addEventListener('click', selecionaBordas);
earth.addEventListener('click', selecionaBordas);
meme1.addEventListener('click', imgClicada);
meme2.addEventListener('click', imgClicada);
meme3.addEventListener('click', imgClicada);
meme4.addEventListener('click', imgClicada);
