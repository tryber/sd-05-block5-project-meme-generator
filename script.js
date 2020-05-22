let text_input = document.getElementById("text-input")
text_input.addEventListener("keyup", function () {
  let text = text_input.value;
  if (text.length > 60) {
    alert("texto muito grande");
    text_input.value=text.substr(0,60);
  }
  document.getElementById("meme-text").innerHTML = text_input.value
});