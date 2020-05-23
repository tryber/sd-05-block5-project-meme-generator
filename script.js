function addMemeText() {
  const memeText = document.getElementById("text-input").value;
  document.querySelector("#meme-text").innerHTML = memeText;
}

const textInput = document.querySelector("#text-input");
textInput.addEventListener("change", addMemeText);
