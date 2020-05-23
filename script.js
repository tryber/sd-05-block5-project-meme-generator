const memeInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function insertImage(event) {
  if (event.target.files && event.target.files[0]) {
    const img = new FileReader();
    img.onload = function (ev) {
      memeImage.src = ev.target.result;
    };
    img.readAsDataURL(event.target.files[0]);
  }
}
memeInput.addEventListener('change', insertImage, false);

textInput.addEventListener('keyup', function () {
  memeText.innerText = this.value;
});
