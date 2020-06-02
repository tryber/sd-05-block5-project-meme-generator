let text_input = document.getElementById('text-input');
let text_output = document.getElementById('meme-text');

text_input.addEventListener('keyup', text);
function text(){
  text_output.innerHTML = text_input.value;
}

