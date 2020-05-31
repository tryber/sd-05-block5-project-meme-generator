// Variáveis de entrada
const textInput = document.querySelector('#text-input');
const imgInsert = document.querySelector('#meme-insert');
const container = document.querySelector('#meme-image-container');
const image = document.querySelector('#meme-image');
const text = document.querySelector('#meme-text');

// Texto sobre imagem
function textOnImg() {
  text.innerHTML = textInput.value;
}
textInput.addEventListener('keyup', textOnImg);
