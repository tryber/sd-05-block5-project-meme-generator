// Variáveis de entrada
const textInput = document.querySelector('#text-input');
const imgInsert = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const text = document.querySelector('#meme-text');

// Texto sobre imagem
function textOnImg() {
  text.innerHTML = textInput.value;
}
textInput.addEventListener('keyup', textOnImg);

// Inserindo Imagem
imgInsert.addEventListener('input', function () {
  image.src = URL.createObjectURL(this.files[0]);
});
