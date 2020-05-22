//Primeiro, interagir com o input de texto do usuario.

//declarar todas as 4 var interessantes aqui

let textInput = document.getElementById("text-input");
let picInput = document.getElementById("meme-insert");

let textMeme = document.getElementById("meme-text");
let picMeme = document.getElementById("meme-image");

//function e addEventListener para pegar o input e fazê-lo aparecer

let userTextMeme = "";
function getTextInput () {
  userTextMeme = textInput.value;
  textMeme.innerHTML = userTextMeme;
}

textInput.addEventListener("keyup", getTextInput);

//




