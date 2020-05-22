// definição de variaveis
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const textInput2 = document.getElementById('text-input2');
const imgContainer = document.getElementById('meme-image-container');
const caixaTxtDoMeme = document.getElementById('meme-text');
const caixaTxtDoMeme2 = document.getElementById('meme-text2');
const imgInput = document.getElementById('meme-insert');
const fogo = document.getElementById('fire');
const agua = document.getElementById('water');
const terra = document.getElementById('earth');
const badluck = document.getElementById('meme-4');
const yellowsuit = document.getElementById('meme-3');
const work = document.getElementById('meme-2');
const spider = document.getElementById('meme-1');

// Functions

function criaTxtDoMeme() {
  if (event.target === textInput) {
    caixaTxtDoMeme.innerText = textInput.value;
  }
  if (event.target === textInput2) {
    caixaTxtDoMeme2.innerText = textInput2.value;
  }
}

function trocaBorda() {
  if (event.target === fogo) {
    imgContainer.style.borderColor = 'red';
    imgContainer.style.borderWidth = '3px';
    imgContainer.style.borderStyle = 'dashed';
  }
  if (event.target === agua) {
    imgContainer.style.borderColor = 'blue';
    imgContainer.style.borderWidth = '5px';
    imgContainer.style.borderStyle = 'double';
  }
  if (event.target === terra) {
    imgContainer.style.borderColor = 'green';
    imgContainer.style.borderWidth = '6px';
    imgContainer.style.borderStyle = 'groove';
  }
}
function changePic() {
  if (event.target === badluck) {
    memeImage.src = 'imgs/meme4.png';
  }
  if (event.target === yellowsuit) {
    memeImage.src = 'imgs/meme3.png';
  }
  if (event.target === work) {
    memeImage.src = 'imgs/meme2.png';
  }
  if (event.target === spider) {
    memeImage.src = 'imgs/meme1.png';
  }
}
// eventListeners
textInput.addEventListener('keyup', criaTxtDoMeme);
textInput2.addEventListener('keyup', criaTxtDoMeme);

imgInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});
fogo.addEventListener('click', trocaBorda);
agua.addEventListener('click', trocaBorda);
terra.addEventListener('click', trocaBorda);
badluck.addEventListener('click', changePic);
work.addEventListener('click', changePic);
yellowsuit.addEventListener('click', changePic);
spider.addEventListener('click', changePic);
