const memeInput = document.getElementById("meme-input");
const memeImage = document.getElementById("meme-image");
const textInput = document.getElementById("text-input");
const memeText = document.getElementById("meme-text");
const memeImageContainer = document.getElementById("meme-image-container");

memeInput.addEventListener("input", function(){
  memeImage.src = URL.createObjectURL(this.files[0]);
});
textInput.addEventListener("keyup", function() {
  memeText.innerText = this.value;
});

// Funções

