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

let meme1 =document.getElementById('meme-1');
meme1.addEventListener('click', function(){
  outputImage.src = 'imgs/meme1.png'
})

let meme2 =document.getElementById('meme-2');
meme2.addEventListener('click', function(){
  outputImage.src = 'imgs/meme2.png'
})

let meme3 =document.getElementById('meme-3');
meme3.addEventListener('click', function(){
  outputImage.src = 'imgs/meme3.png'
})

let meme4 =document.getElementById('meme-4');
meme4.addEventListener('click', function(){
  outputImage.src = 'imgs/meme4.png'
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
