let textInput = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text")
textInput.addEventListener("change", memeTextAdd)

function memeTextAdd(){
textOutput.innerHTML= textInput.value
}

