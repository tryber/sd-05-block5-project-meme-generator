const memeImage = document.getElementById('meme-image');
const memeInput = document.getElementById('meme-insert');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fogo = document.getElementById('fire');
const agua = document.getElementById('water');
const terra = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function presetImg() {
  const target = event.target;
  if (target === meme1) {
    memeImage.src = '/imgs/meme1.png';
  }
  if (target === meme2) {
    memeImage.src = '/imgs/meme2.png';
  }
  if (target === meme3) {
    memeImage.src = '/imgs/meme3.png';
  }
  if (target === meme4) {
    memeImage.src = '/imgs/meme4.png';
  }
}

function trocaBorda() {
  if (event.target === fogo) {
    memeContainer.style.borderColor = 'red';
    memeContainer.style.borderWidth = '3px';
    memeContainer.style.borderStyle = 'dashed';
  }
  if (event.target === agua) {
    memeContainer.style.borderColor = 'blue';
    memeContainer.style.borderWidth = '5px';
    memeContainer.style.borderStyle = 'double';
  }
  if (event.target === terra) {
    memeContainer.style.borderColor = 'green';
    memeContainer.style.borderWidth = '6px';
    memeContainer.style.borderStyle = 'groove';
  }
}

function readText() {
  memeText.innerHTML = textInput.value;
}
memeInput.addEventListener('change', function () {
  readURL(this);
});

function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (event) {
      memeImage.setAttribute('src', event.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

fogo.addEventListener('click', trocaBorda);
agua.addEventListener('click', trocaBorda);
terra.addEventListener('click', trocaBorda);
textInput.addEventListener('keyup', readText);
meme1.addEventListener('click', presetImg);
meme2.addEventListener('click', presetImg);
meme3.addEventListener('click', presetImg);
meme4.addEventListener('click', presetImg);
