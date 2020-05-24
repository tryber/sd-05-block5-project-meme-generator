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
