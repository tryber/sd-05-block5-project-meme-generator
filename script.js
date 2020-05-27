const textInput = document.getElementById("text-input");
const memeText = document.getElementById("meme-text");
const memeInsert = document.getElementById("meme-insert");
const memeImage = document.getElementById("meme-image");

function showImage(evento) {
  let image = evento.target.files[0];
  memeImage.src = URL.createObjectURL(image);
}

memeInsert.addEventListener("change", showImage);
textInput.addEventListener("keyup", function(){
  memeText.innerText = this.value;
});
