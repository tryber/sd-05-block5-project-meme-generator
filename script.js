let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let memeImage = document.getElementById("meme-image")
let memeInsert = document.getElementById("meme-insert")
let memeImageContainer = document.getElementById("meme-image-container");

textInput.addEventListener('keyup', function() {
    memeText.innerText = textInput.value;
})
    
memeInsert.addEventListener("input", function() {
memeImage.src = URL.createObjectURL(this.files[0]);
})//função completa para requisito mínimo//