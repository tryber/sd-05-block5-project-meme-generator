let textInput = function(event) {
  let memeText = document.getElementById("meme-text");
  memeText.innerHTML = event.target.value;
}

let imageInput = function(event) {
  let memeImage = document.getElementById("meme-image");
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
