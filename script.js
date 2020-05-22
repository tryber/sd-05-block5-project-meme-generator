//create variable to store text input
let txt = document.querySelector("#text-input");

//add a event listener to add the text to the div meme-text when the user types it
txt.addEventListener("keyup", function() {
  document.querySelector("#meme-text").innerHTML = txt.value;
})
