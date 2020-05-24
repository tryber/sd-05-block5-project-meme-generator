//Variáveis

let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let memeImage = document.getElementById("meme-image");
let imageInput = document.getElementById("meme-insert");

//Funções
function insertMemeText() {
    memeText.innerText = textInput.value;
}

//Event Listners