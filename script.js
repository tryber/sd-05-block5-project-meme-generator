let setTextInput = function (event) {
  const input = document.getElementById('text-input');
  const text= document.getElementById('meme-text');

  text.innerHTML = input.value;
};

let loadFile = function (event) {
  let output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src); // free memory
  };
};

let borderChange = function (event) {
  let btn = document.getElementById('earth');
  let brdr = document.getElementById('meme-image-container');
};