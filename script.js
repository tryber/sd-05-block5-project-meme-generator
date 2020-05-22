let inputText = document.getElementById("text-input");

let memeText = document.getElementById("meme-text");



inputText.addEventListener("keyup", function () {
  memeText.innerHTML = inputText.value;
});


