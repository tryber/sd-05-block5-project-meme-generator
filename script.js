const inputText = document.getElementById('text-input');

const memeText = document.getElementById('meme-text');

inputText.addEventListener('keyup', function () {
  memeText.innerHTML = inputText.value;
});

const inputImage = document.getElementById('meme-insert');
const outputImage = document.getElementById('meme-image');

inputImage.addEventListener('input', function () {
  outputImage.src = URL.createObjectURL(this.files[0]);
});

const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', function () {
  outputImage.src = 'imgs/meme1.png';
});

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', function () {
  outputImage.src = 'imgs/meme2.png';
});

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', function () {
  outputImage.src = 'imgs/meme3.png';
});

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', function () {
  outputImage.src = 'imgs/meme4.png';
});

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const container = document.getElementById('meme-image-container');

fire.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});
water.addEventListener('click', function () {
  container.style.border = '5px double blue';
});
earth.addEventListener('click', function () {
  container.style.border = '6px groove green';
});
