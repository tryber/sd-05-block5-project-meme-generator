// definição de variaveis
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const caixaTxtDoMeme = document.getElementById('meme-text');
const imgInput = document.getElementById('meme-insert');

// Functions

function criaTxtDoMeme() {
  if (textInput.value.length > 10) {
    textInput.value = textInput.value.slice(0, 10);
  }
  caixaTxtDoMeme.innerText = textInput.value;
}
  
// eventListeners
textInput.addEventListener('keyup', criaTxtDoMeme);
imgInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});
