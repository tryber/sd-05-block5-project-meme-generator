let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let memeImage = document.getElementById("meme-image")
let memeInsert = document.getElementById("meme-insert")
let memeImageContainer = document.getElementById("meme-image-container");

function inputText() {
memeText.innerText = textInput.value;
}

memeInsert.addEventListener("input", function() {
memeImageContainer.src = window.URL.createObjectURL(this.files[0]);
})

function addNovoMeme (){
   memeImage.src = window.URL.createObjectURL(memeNovo.files[0])
  }
  memeInsert.addEventListener('click', memeInsert)	new_meme.addEventListener('change', addNovoMeme);