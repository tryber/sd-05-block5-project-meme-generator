// Variáveis de entrada
const textInputTop = document.querySelector('#text-input-top');
const textInput = document.querySelector('#text-input');
const memeText = document.getElementById('meme-text');
const memeTextTop = document.getElementById('meme-text-top');
const imgInsert = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const memeOne = document.getElementById('meme-1');
const memeTwo = document.getElementById('meme-2');
const memeThree = document.getElementById('meme-3');
const memeFour = document.getElementById('meme-4');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

// Texto sobre imagem
function textOnImg() {
  memeText.innerHTML = textInput.value;
  memeTextTop.innerHTML = textInputTop.value;
}
textInput.addEventListener('keyup', textOnImg);
textInputTop.addEventListener('keyup', textOnImg);
// Inserindo Imagem
imgInsert.addEventListener('input', function () {
  image.src = URL.createObjectURL(this.files[0]);
});
// Selecionando Memes
memeOne.addEventListener('click', function () {
  image.src = 'meme1.jpeg';
});
memeTwo.addEventListener('click', function () {
  image.src = 'meme2.png';
});
memeThree.addEventListener('click', function () {
  image.src = 'meme3.png';
});
memeFour.addEventListener('click', function () {
  image.src = 'meme4.png';
});
// Selecionando bordas
function changeBorderF() {
  memeContainer.style.border = '3px dashed red';
}
fireButton.addEventListener('click', changeBorderF);

function changeBorderW() {
  memeContainer.style.border = '5px double blue';
}
waterButton.addEventListener('click', changeBorderW);

function changeBorderE() {
  memeContainer.style.border = '6px groove green';
}
earthButton.addEventListener('click', changeBorderE);
