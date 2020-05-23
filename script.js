const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');


function getText() {
  memeText.innerHTML = textInput.value;
}
textInput.addEventListener('keyup', getText);

memeInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

