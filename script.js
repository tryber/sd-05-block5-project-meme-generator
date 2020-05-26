
function textoNoMeme(){
    let memeText = document.getElementById("meme-text");
    memeText.innerText = document.getElementById("text-input").value;

}
document.getElementById("text-input").addEventListener("keyup", textoNoMeme);