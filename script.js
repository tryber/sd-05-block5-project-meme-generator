// Creation of the element related to the text input and input of its value inside of the correspondent div
let textInput = document.getElementById('text-input');
let memeText = "";
textInput.addEventListener('keyup', getText);
function getText() {
  memeText = textInput.value;
  document.querySelector("#meme-text").innerHTML = memeText;
}

// The image uploaded by the user is loaded inside the container
document.querySelector("#meme-insert").addEventListener("change", readImage, false);
function readImage(event) {
  if (event.target.files && event.target.files[0]) {
      let file = new FileReader();
      file.onload = function(e) {
          document.getElementById("meme-image").src = e.target.result;
      };       
      file.readAsDataURL(event.target.files[0]);
  }
}

// use the buttons to change the color of the container's border
let buttonFire = document.getElementById("fire");
buttonFire.addEventListener('click', changeColor1);
function changeColor1() {
  document.getElementById("meme-image-container").style.border = "1px solid orange";
}

let buttonWater = document.getElementById("water");
buttonWater.addEventListener('click', changeColor2);
function changeColor2() {
  document.getElementById("meme-image-container").style.border = "1px solid blue";
}

let buttonEarth = document.getElementById("earth");
buttonEarth.addEventListener('click', changeColor);
function changeColor() {
  document.getElementById("meme-image-container").style.border = "1px solid brown";
}
