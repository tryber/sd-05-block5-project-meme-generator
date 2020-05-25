let memeImage = document.getElementById('meme-image');
let memeInput = document.getElementById('meme-insert');
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let fogo = document.getElementById('fire');
let agua = document.getElementById('water');
let terra = document.getElementById('earth');
let memeContainer = document.getElementById('meme-image-container');


function trocaBorda() {
  if (event.target === fogo) {
    
    memeContainer.style.borderColor = 'red'; 
    memeContainer.style.borderWidth = '3px'; 
    memeContainer.style.borderStyle = 'dashed'; 
  }
  if (event.target === agua) {
    // se o botao clicado foi o agua
    memeContainer.style.borderColor = 'blue'; 
    memeContainer.style.borderWidth = '5px'; 
    memeContainer.style.borderStyle = 'double'; 
  }
  if (event.target === terra) {
    // se o botao clicado foi o terra
    memeContainer.style.borderColor = 'green'; 
    memeContainer.style.borderWidth = '6px'; 
    memeContainer.style.borderStyle = 'groove'; 
  }
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

fogo.addEventListener('click', trocaBorda);
agua.addEventListener('click', trocaBorda);
terra.addEventListener('click', trocaBorda);
textInput.addEventListener('keyup', readText);