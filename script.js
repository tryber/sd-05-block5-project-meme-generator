// Creation of the element related to the text input and input of its value inside of the correspondent div
let textInput = document.getElementById('text-input');
let memeText = "";
textInput.addEventListener('keyup', getText);
function getText() {
  memeText = textInput.value;
  document.querySelector("#meme-text").innerHTML = memeText;
}


document.getElementById("meme-insert").addEventListener("change", readImage, false);
function readImage(event) {
  if (event.target.files && event.target.files[0]) {
      let file = new FileReader();
      file.onload = function(e) {
          document.getElementById("meme-image").src = e.target.result;
      };       
      file.readAsDataURL(event.target.files[0]);
  }
}


