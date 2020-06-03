let text_input = document.getElementById('text-input');
let text_output = document.getElementById('meme-text');

text_input.addEventListener('keyup', text);
function text(){
  text_output.innerHTML = text_input.value;
}

let image_input = document.getElementById('meme-insert');
let image_output = document.getElementById('meme-image')
let container = document.getElementById('meme-image-container');

image_input.addEventListener('change', image);
function image(event){
  let read_img = new FileReader();
  read_img.onload = function () {
    let image_output = document.getElementById('meme-image');
    image_output.src = read_img.result;
    container.style.width = 'auto';
    container.style.height = 'auto';
  }
  read_img.readAsDataURL(event.target.files[0]);
}

let fire = document.getElementById('fire');
let water = document.getElementById('water');
let earth = document.getElementById('earth');

fire.addEventListener('click', function a(){container.style.border = '3px dashed red'});
water.addEventListener('click', function b(){container.style.border = '5px double blue' });
earth.addEventListener('click', function c(){container.style.border = '6px groove green' });