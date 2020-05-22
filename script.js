// definição de variaveis
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const caixaTxtDoMeme = document.getElementById('meme-text');
const imgInput = document.getElementById('meme-insert');

// eventListeners
textInput.addEventListener('keyup', criaTxtDoMeme);
imgInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});
// Functions

function criaTxtDoMeme() {
  caixaTxtDoMeme.innerText = textInput.value;
}
