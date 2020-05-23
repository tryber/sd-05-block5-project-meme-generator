let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");

function insereTexto() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener("keyup", insereTexto);

let memeInsert = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");

memeInsert.addEventListener("input", function() {
  memeImage.src = URL.createObjectURL(this.files[0]);
});



