// create variable to store text input
const txt = window.document.querySelector('#text-input');

// add a event listener to add the text to the div meme-text when the user types it
txt.addEventListener('keyup', function () {
  document.querySelector('#meme-text').innerHTML = txt.value;
});

// load image
function loadFile(event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
}

// create variables to get the buttons that style borders and the image
const earthButton = document.getElementById("earth");
const fireButton = document.getElementById("fire");
const waterButton = document.getElementById("water");
const ctnr = document.getElementById("meme-image-container");

// add event listener to the buttons that change border and apply the style to meme-image-container's border
earthButton.addEventListener("click", function () {
  ctnr.style.border = "6px groove green";
});
fireButton.addEventListener("click", function () {
  ctnr.style.border = "3px dashed red";
});
waterButton.addEventListener("click", function () {
  ctnr.style.border = "5px double blue";
});