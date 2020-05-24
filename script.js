const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function insereTexto() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', insereTexto);

const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

memeInsert.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const imageContainer = document.getElementById('meme-image-container');

function borda() {
  if (event.target === fire) {
    imageContainer.style.borderColor = 'red';
    imageContainer.style.borderWidth = '3px';
    imageContainer.style.borderStyle = 'dashed';
  }

  if (event.target === water) {
    imageContainer.style.borderColor = 'blue';
    imageContainer.style.borderWidth = '5px';
    imageContainer.style.borderStyle = 'double';
  }

  if (event.target === earth) {
    imageContainer.style.borderColor = 'green';
    imageContainer.style.borderWidth = '6px';
    imageContainer.style.borderStyle = 'groove';
  }
}

fire.addEventListener('click', borda);
water.addEventListener('click', borda);
earth.addEventListener('click', borda);

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function mudaMeme1() {
  if (event.target === meme1);
  memeImage.src = 'imgs/meme1.png';
}

function mudaMeme2() {
  if (event.target === meme2);
  memeImage.src = 'imgs/meme2.png';
}

function mudaMeme3() {
  if (event.target === meme3);
  memeImage.src = 'imgs/meme3.png';
}

function mudaMeme4() {
  if (event.target === meme4);
  memeImage.src = 'imgs/meme4.png';
}

meme1.addEventListener('click', mudaMeme1);
meme2.addEventListener('click', mudaMeme2);
meme3.addEventListener('click', mudaMeme3);
meme4.addEventListener('click', mudaMeme4);
