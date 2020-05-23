const memeInput = document.getElementById('meme-input');
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

memeInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

textInput.addEventListener('keyup', function () {
  memeText.innerText = this.value;
});
