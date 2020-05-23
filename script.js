const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

function getText() {
  memeText.innerHTML = textInput.value;
}
textInput.addEventListener('keyup', getText);

memeInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

function changeBorderF(e) {
  memeContainer.style.border = "3px dashed red";
}
fireButton.addEventListener('click', changeBorderF);

function changeBorderW(e) {
  memeContainer.style.border = "5px double blue";
}
waterButton.addEventListener('click', changeBorderW);

function changeBorderE(e) {
  memeContainer.style.border = "6x groove green";
}
earthButton.addEventListener('click', changeBorderE);
