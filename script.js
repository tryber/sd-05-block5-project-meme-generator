let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let memeImageIn = document.getElementaryById("meme-insert")
let memeImage = document.getElementById("meme-image")
let memeInsert = document.getElementById("meme-insert")

memeInsert.addEventListener("input", function() {
memeImage.src = URL.createObjectURL(this.files[0]);
})


function inputText() {
memeText.innerText = textInput.value;
}


textInput.addEventListener("keyup", inputText);
memeInput.addEventListener("keyup", function() {
memeText.innerText = inputText.value;
})


memeInput.addEventListener("input", function(){
memeImage.src = URL.createObjectURL(this.files[0]);
})