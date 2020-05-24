//Variáveis
let textInput = document.getElementById("text-input");
let imageInput = document.getElementById("meme-insert");
let memeText = document.getElementById("meme-text");
let memeImage = document.getElementById("meme-image");
let imageContainer = document.getElementById("meme-image-container");


//Funções
function insertMemeText() {
  memeText.innerText = textInput.value;
}


//Event Listners
textInput.addEventListener("keyup", insertMemeText);
imageInput.addEventListener("input", function () {
  memeImage.src=URL.createObjectURL(this.files[0]);
});
