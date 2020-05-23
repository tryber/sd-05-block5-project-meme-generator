let memeText = "";

let textInput = document.querySelector("#text-input");
textInput.addEventListener("change", typeAndScream);

function typeAndScream() {
    memeText = document.getElementById("text-input").value;
  document.querySelector("#meme-text").innerHTML = memeText;
}
