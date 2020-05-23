let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");

function insereTexto() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener("keyup", insereTexto);