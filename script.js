// definição de variaveis
let memeImage = document.getElementById("meme-image");
let textInput = document.getElementById("text-input");
let caixaTxtDoMeme = document.getElementById("meme-text");
let imgInput = document.getElementById("meme-insert");

// eventListeners
textInput.addEventListener("keyup", criaTxtDoMeme);
imgInput.addEventListener("input", function(){
  memeImage.src = URL.createObjectURL(this.files[0]);
})
// Functions

function criaTxtDoMeme() {
  caixaTxtDoMeme.innerText = textInput.value;
}
