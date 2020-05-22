// var personName = "";
// function complainMessage() {
//   alert("I told you not to do that " + personName);

// let buttonDont = document.getElementsByTagName("button")[1];
// buttonDont.addEventListener("click", complainMessage);

let textInput = document.getElementById("text-input");
let picInput = document.getElementById("meme-insert");

let textMeme = document.getElementById("meme-text");
let picMeme = document.getElementById("meme-image");

let userTextMeme = "";
function getTextInput () {
  userTextMeme = textInput.value;
  textMeme.innerHTML = userTextMeme;
}

textInput.addEventListener("keyup", getTextInput);





