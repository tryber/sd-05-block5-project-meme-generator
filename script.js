var setTextInput = function(event) {
  const input = document.getElementById("text-input");
  const text= document.getElementById("meme-text");

  text.innerHTML = input.value; 
 }

var loadFile = function(event) {
var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
  URL.revokeObjectURL(output.src) // free memory
}

var borderChange = function(event) {
  var btn = document.getElementById("earth");
  var brdr = document.getElementById("meme-image-container");

  
}
};
