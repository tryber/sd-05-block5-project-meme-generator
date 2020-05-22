window.onload = function () {

 const textInput = document.getElementById("text-input");
 const memeInsert = document.getElementById("meme-insert");
 const memeText = document.getElementById("meme-text");
 const memeImage = document.getElementById("meme-image");

 textInput.addEventListener("keyup", () => {
   memeText.innerHTML = textInput.value;
 });

 memeInsert.addEventListener("input", (event) => {
   memeImage.src = URL.createObjectURL(event.target.files[0]);
 });
}

