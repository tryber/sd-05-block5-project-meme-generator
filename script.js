/* Creation of the element related to the text input and input
of its value inside of the correspondent div */
const textInput = document.getElementById('text-input');
let memeText = '';
function getText () {
  memeText = textInput.value;
  document.querySelector('#meme-text').innerHTML = memeText;
}
textInput.addEventListener('keyup', getText);

// The image uploaded by the user is loaded inside the container
function readImage (event) {
  if (event.target.files && event.target.files[0]) {
    let file = new FileReader();
    file.onload = function(e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }
}
document.querySelector('#meme-insert').addEventListener('change', readImage, false);

// use the buttons to change the color of the container's border
function changeColor1 () {
  document.getElementById('meme-image-container').style.border = '3px double red';
}
const buttonFire = document.getElementById('fire');
buttonFire.addEventListener('click', changeColor1);

function changeColor2 () {
  document.getElementById('meme-image-container').style.border = '5px double blue';
}
const buttonWater = document.getElementById('water');
buttonWater.addEventListener('click', changeColor2);

function changeColor () {
  document.getElementById('meme-image-container').style.border = '6px double green';
}
const buttonEarth = document.getElementById('earth');
buttonEarth.addEventListener('click', changeColor);

// Load memes the are already done
function loadMemeDone1 () {
  document.getElementById('meme-image').src = loadMeme1.src;
  document.getElementById('meme-text').innerHTML = 'É o que que está acontencendo?';
}
const loadMeme1 = document.getElementById('meme-1').firstChild;
loadMeme1.addEventListener('click', loadMemeDone1);

function loadMemeDone2 () {
  document.getElementById('meme-image').src = loadMeme2.src;
  document.getElementById('meme-text').innerHTML = 'Ehhhh... Melhor não';
}
const loadMeme2 = document.getElementById('meme-2').firstChild;
loadMeme2.addEventListener('click', loadMemeDone2);

function loadMemeDone3 () {
  document.getElementById('meme-image').src = loadMeme3.src;
  document.getElementById('meme-text').innerHTML = 'Cri cri cri';
}
const loadMeme3 = document.getElementById('meme-3').firstChild;
loadMeme3.addEventListener('click', loadMemeDone3);

function loadMemeDone4 () {
  document.getElementById('meme-image').src = loadMeme4.src;
  document.getElementById('meme-text').innerHTML = 'Não peguei a referencia';
}
const loadMeme4 = document.getElementById('meme-4').firstChild;
loadMeme4.addEventListener('click', loadMemeDone4);
