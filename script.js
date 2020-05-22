// create variable to store text input
const txt = window.document.querySelector('#text-input');

// add a event listener to add the text to the div meme-text when the user types it
txt.addEventListener('keyup', function () {
  document.querySelector('#meme-text').innerHTML = txt.value;
});

// load image
function loadFile(event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  }
}
