let memeImage = document.getElementById('meme-image');
let memeInput = document.getElementById('meme-insert');
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');



textInput.addEventListener('keyup', readText);

function readText() {
  memeText.innerHTML = textInput.value;
}

memeInput.addEventListener('change', function() {
  readURL(this);
});

function readURL(input) {
  if(input.files && input.files[0]) {
    let reader = new FileReader();

    reader.onload = function(event) {
      memeImage.setAttribute('src', event.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}