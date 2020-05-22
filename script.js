let memeImage = document.getElementById('meme-image');
let memeInput = document.getElementById('meme-insert');
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');



textInput.addEventListener('change', readText);

function readText() {
  memeText.innerHTML = textInput.value;
}
