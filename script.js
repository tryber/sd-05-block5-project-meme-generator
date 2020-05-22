//create variable to store text input
let txt = window.document.querySelector("#text-input");

//add a event listener to add the text to the div meme-text when the user types it
txt.addEventListener("keyup", function() {
  document.querySelector("#meme-text").innerHTML = txt.value;
})

//load image
function loadFile(event) {
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
