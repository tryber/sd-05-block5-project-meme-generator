const textInput = document.getElementById("text-input");
const memeText = document.getElementById("meme-text");

function insereTexto() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener("keyup", insereTexto);

const memeInsert = document.getElementById("meme-insert");
const memeImage = document.getElementById("meme-image");

memeInsert.addEventListener("input", function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});
