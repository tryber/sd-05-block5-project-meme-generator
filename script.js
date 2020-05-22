//Creation of the element related to the text input and input of its value inside of the correspondent div
let textInput = document.getElementById("text-input");
let memeText = "";
textInput.addEventListener('keyup', getText);
function getText(){
  memeText = textInput.value;
  document.querySelector("#meme-text").innerHTML = memeText;
}

