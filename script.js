// definição de variaveis
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const imgContainer = document.getElementById('meme-image-container')
const caixaTxtDoMeme = document.getElementById('meme-text');
const imgInput = document.getElementById('meme-insert');
const fogo = document.getElementById('fire');
const agua = document.getElementById('water');
const terra = document.getElementById('earth');

// Functions

function criaTxtDoMeme() {
  caixaTxtDoMeme.innerText = textInput.value;
}

function trocaBorda() {
  if (event.target == fogo) {
    imgContainer.style.borderColor = "red";
    imgContainer.style.borderWidth = "3px";
    imgContainer.style.borderStyle = "dashed";
  }
  if (event.target == agua) {
    imgContainer.style.borderColor = "blue";
    imgContainer.style.borderWidth = "5px";
    imgContainer.style.borderStyle = "double";
  }
  if (event.target == terra) {
    imgContainer.style.borderColor = "green";
    imgContainer.style.borderWidth = "6px";
    imgContainer.style.borderStyle = "groove";
  }

}
// eventListeners
textInput.addEventListener('keyup', criaTxtDoMeme);
imgInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});
fogo.addEventListener('click', trocaBorda);
agua.addEventListener('click', trocaBorda);
terra.addEventListener('click', trocaBorda);
