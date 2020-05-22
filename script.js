/* Creation of the element related to the text input and input
of its value inside of the correspondent div */
const textInput = document.getElementById('text-input');
let memeText = '';
function getText() {
  memeText = textInput.value;
  document.querySelector('#meme-text').innerHTML = memeText;
}
textInput.addEventListener('keyup', getText);

// The image uploaded by the user is loaded inside the container
function readImage(event) {
  if (event.target.files && event.target.files[0]) {
    const file = new FileReader();
    file.onload = function (e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }
}
document.querySelector('#meme-insert').addEventListener('change', readImage, false);

// use the buttons to change the color of the container's border
function changeColor1() {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
}
const buttonFire = document.getElementById('fire');
buttonFire.addEventListener('click', changeColor1);

function changeColor2() {
  document.getElementById('meme-image-container').style.border = '5px double blue';
}
const buttonWater = document.getElementById('water');
buttonWater.addEventListener('click', changeColor2);

function changeColor() {
  document.getElementById('meme-image-container').style.border = '6px groove green';
}
const buttonEarth = document.getElementById('earth');
buttonEarth.addEventListener('click', changeColor);

// Load memes the are already done
const loadMeme1 = document.getElementById('meme-1');
function loadMemeDone1() {
  document.getElementById('meme-image').src = loadMeme1.src;
  document.getElementById('meme-text').innerHTML = 'É o que que está acontencendo?';
}
loadMeme1.addEventListener('click', loadMemeDone1);

const loadMeme2 = document.getElementById('meme-2');
function loadMemeDone2() {
  document.getElementById('meme-image').src = loadMeme2.src;
  document.getElementById('meme-text').innerHTML = 'Ehhhh... Melhor não';
}
loadMeme2.addEventListener('click', loadMemeDone2);

const loadMeme3 = document.getElementById('meme-3');
function loadMemeDone3() {
  document.getElementById('meme-image').src = loadMeme3.src;
  document.getElementById('meme-text').innerHTML = 'Cri cri cri';
}
loadMeme3.addEventListener('click', loadMemeDone3);

const loadMeme4 = document.getElementById('meme-4');
function loadMemeDone4() {
  document.getElementById('meme-image').src = loadMeme4.src;
  document.getElementById('meme-text').innerHTML = 'Não peguei a referencia';
}
loadMeme4.addEventListener('click', loadMemeDone4);
