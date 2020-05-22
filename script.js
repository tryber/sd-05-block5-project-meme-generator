// definição de variaveis

let textInput = document.getElementById("text-input");
let caixaTxtDoMeme = document.getElementById("meme-text");

// eventListeners
textInput.addEventListener("keyup", criaTxtDoMeme);

// Functions

function criaTxtDoMeme() {
  caixaTxtDoMeme.innerText = textInput.value;
}
