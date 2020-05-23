
let imageInput = function(event) {
  let memeImage = document.getElementById("meme-image");
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
