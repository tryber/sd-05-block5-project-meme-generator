//variaveis

const memeImage = document.querySelector("#meme-image");
const textInput = document.querySelector("#text-input");
const imgContainer = document.querySelector("#meme-image-container");
const caixaTextoDoMeme = document.querySelector("#meme-text");
const imgInput = document.querySelector("#meme-insert");

//função

function textoMeme(){
  caixaTextoDoMeme.innerText = textInput.value;
}

//eventos

textInput.addEventListener("keyup", textoMeme);

imgInput.addEventListener("input", function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});