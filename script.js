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
