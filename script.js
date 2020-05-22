window.onload = function () {

 let textInput = document.getElementById("text-input");
 let memeInsert = document.getElementById("meme-insert");
 let memeContainer = document.getElementById("meme-image-container");
 let memeText = document.getElementById("meme-text");
 let memeImage = document.getElementById("meme-image");

 textInput.addEventListener("keyup", (event) => {
  memeText.innerHTML = textInput.value;
 })

 memeInsert.addEventListener("input", (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
 })
}