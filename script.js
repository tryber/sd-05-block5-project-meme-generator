//Variáveis de entrada
let textInput = document.querySelector("#text-input");
let imgInsert = document.querySelector("#meme-insert");
let container = document.querySelector("#meme-image-container");
let image = document.querySelector("#meme-image");
let text = document.querySelector("#meme-text");

//Texto sobre imagem
function textOnImg() {
  text.innerHTML = textInput.value;
}
textInput.addEventListener("keyup", textOnImg);