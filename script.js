let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let memeImageIn = document.getElementaryById("meme-insert")
let memeImageOut = document.getElementById("meme-image")

function inputText() {
    memeText.innerText = textInput.value;
}

textInput.addEventListener("keyup", inputText);
memeInput.addEventListener("keyup", function() {
    memeText.innerText = inputText.value;
    })

    memeInsert.addEventListener("input", function() {
        memeImage.src = URL.createObjectURL(this.files[0]);
      })
