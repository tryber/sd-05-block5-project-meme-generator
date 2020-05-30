
const memeText = document.querySelector("#meme-text");
document.querySelector("#text-input").addEventListener("keyup", () => {
  //quando alterar o input, alterar o innerhtml do meme-text
    memeText.innerHTML = event.target.value ;
});

const memeImage = document.getElementById("meme-image");
document.getElementById("meme-insert").addEventListener
("input", function () {
    memeImage.src = URL.createObjectURL(this.files[0]);
});