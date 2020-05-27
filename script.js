let textInput = document.getElementById("text-input"),
  textMeme = document.getElementById("meme-text"),
  memeInsert = document.getElementById("meme-insert"),
  memeImage = document.getElementById("meme-image"),

function insertText() {
  textMeme.innerHTML = textInput.value;
}

function showImage(evento) {
  let image = evento.target.files[0];
  memeImage.src = URL.createObjectURL(image);
}

memeInsert.addEventListener("change", showImage);
textInput.addEventListener("keyup", insertText);
