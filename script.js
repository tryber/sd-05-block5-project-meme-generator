let memeImage = document.getElementById('meme-image');
let memeInput = document.getElementById('meme-insert');
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let fireButton = document.getElementById('fire');
let waterButton = document.getElementById('water');
let earthButton = document.getElementById('earth');
let memeContainer = document.getElementById('meme-image-container');

function fire(){
  memeContainer.style.border = '3px dashed red'
}

function water(){
  memeContainer.style.border = '5px double blue'
}

function earth(){
  memeContainer.style.border = '6px groove green'
}


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

fireButton.addEventListener('click', fire);
waterButton.addEventListener('click', water);
earthButton.addEventListener('click', earth);
textInput.addEventListener('keyup', readText);