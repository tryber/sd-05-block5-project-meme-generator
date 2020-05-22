let textInput = document.getElementById('text-input');
let memeInput = document.getElementById('meme-insert');
let memeText = document.getElementById('meme-text');
let memeImage = document.getElementById('meme-image')

textInput.addEventListener('change', getText);

function getText() {
  memeText.innerHTML = textInput.value;
  console.log(memeText)
}
