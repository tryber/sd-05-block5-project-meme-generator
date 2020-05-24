let inputText = document.getElementById("text-input");

let memeText = document.getElementById("meme-text");


inputText.addEventListener("keyup", function () {
  memeText.innerHTML = inputText.value;
});

let inputImage = document.getElementById('meme-insert');
let outputImage = document.getElementById('meme-image');
// inputImage.addEventListener('input', function(){ 
//     outputImage.src = inputImage
// }
// )

inputImage.addEventListener("input", function(){
  outputImage.src = URL.createObjectURL(this.files[0]);
})

let fire = document.getElementById('fire');
let water = document.getElementById('water');
let earth = document.getElementById('earth');
let container = document.getElementById('meme-image-container');

fire.addEventListener('click', function(){
  container.style.border = '3px dashed red';
})
water.addEventListener('click', function(){
  container.style.border = '5px double blue';
})
earth.addEventListener('click', function(){
  container.style.border = '6px groove green';
})
