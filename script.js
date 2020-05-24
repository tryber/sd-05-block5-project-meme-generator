const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');
const memeOne = document.getElementById('meme-1');
const memeTwo = document.getElementById('meme-2');
const memeThree = document.getElementById('meme-3');
const memeFour = document.getElementById('meme-4');

function getText() {
  memeText.innerHTML = textInput.value;
}
textInput.addEventListener('keyup', getText);

memeInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

function changeBorderF() {
  memeContainer.style.border = '3px dashed red';
}
fireButton.addEventListener('click', changeBorderF);

function changeBorderW() {
  memeContainer.style.border = '5px double blue';
}
waterButton.addEventListener('click', changeBorderW);

function changeBorderE() {
  memeContainer.style.border = '6px groove green';
}
earthButton.addEventListener('click', changeBorderE);

memeOne.addEventListener('click', function () {
  memeImage.src = 'chloe-meme.jpg';
});

memeTwo.addEventListener('click', function () {
  memeImage.src = 'little-creepy.jpg';
});

memeThree.addEventListener('click', function () {
  memeImage.src = 'idknow.jpg';
});

memeFour.addEventListener('click', function () {
  memeImage.src = 'yao-ming.jpg';
});
