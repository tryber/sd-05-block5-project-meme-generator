let textInput = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text")
textInput.addEventListener("keyup", memeTextAdd)

function memeTextAdd(){
textOutput.innerHTML= textInput.value
}
let memeInput = document.getElementById("meme-insert")
let memeImage = document.getElementById("meme-image")
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
