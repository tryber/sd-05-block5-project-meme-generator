let text_input = document.getElementById("text-input");
text_input.addEventListener("keyup", function () {
  let text = text_input.value;
  if (text.length > 60) {
    alert("texto muito grande");
    text_input.value = text.substr(0, 60);
  }
  document.getElementById("meme-text").innerHTML = text_input.value
});

/*
function loadFile() {
  const preview = document.getElementById('meme-image');
  const file = document.getElementById('meme-insert').files[0];
  const reader = new FileReader();
  console.log(reader.result)
  console.log(file)
  // convert image file to base64 string
  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
document.getElementById("meme-insert").addEventListener("onchange", loadFile,false);
*/

const output = document.getElementById('meme-image');
document.getElementById('meme-insert').addEventListener('change', event => {
  output.src = '';
  //status.textContent = '';
  const file = event.target.files[0];

  if (!file.type.match('image.*')) {
    status.textContent = 'Error: The selected file does not appear to be an image.'
    return;
  }
  const reader = new FileReader();
  reader.addEventListener('load', event => {
    output.src = event.target.result;
    if (false) {

    }
  });
  reader.readAsDataURL(file);
  console.log(file);
});
function test() {
  console.log("h: " + document.getElementById('meme-image').clientHeight + " w:" + document.getElementById('meme-image').clientWidth)
}