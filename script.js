let textInput = document.querySelector("#text-input");
textInput.addEventListener("change", typeAndScream);

function typeAndScream() {
  let memeText = document.getElementById("text-input").value;
  document.querySelector("#meme-text").innerHTML = memeText;
}
