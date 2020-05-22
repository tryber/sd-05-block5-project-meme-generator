let text_input = document.getElementById("text-input");
text_input.addEventListener("keyup", function () {
  let text = text_input.value;
  if (text.length > 60) {
    alert("texto muito grande");
    text_input.value=text.substr(0,60);
  }
  document.getElementById("meme-text").innerHTML = text_input.value
});

// The image uploaded by the user is loaded inside the container
function readImage(event) {
  if (event.target.files && event.target.files[0]) {
    const file = new FileReader();
    file.onload = function (e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }
}
document.querySelector('#meme-insert').addEventListener('change', readImage, false);