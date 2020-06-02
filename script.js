let text_input = document.getElementById('text-input');
let text_output = document.getElementById('meme-text');

text_input.addEventListener('keyup', text);
function text(){
  text_output.innerHTML = text_input.value;
}

let image_input = document.getElementById('meme-insert');
let image_output = document.getElementById('meme-image')

image_input.addEventListener('change', image);
function image(event){
  let read_img = new FileReader();
  read_img.onload = function () {
    let image_output = document.getElementById('meme-image');
    image_output.src = read_img.result;
  }
  read_img.readAsDataURL(event.target.files[0]);
}
