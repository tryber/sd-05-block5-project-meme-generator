let imagem = document.querySelector("#meme-insert");
let textBox = document.querySelector("#text-input");
let div = document.querySelector("div");
let text = document.querySelector('#meme-text');
let img = document.querySelector('#meme-image')


function insertImage () {
    img.src = URL.createObjectURL(imagem.files[0]);
}
function insertText() {
    let insert = document.querySelector('#meme-text');
    insert.style.position = "absolute";
    insert.innerText = textBox.value;

}   

imagem.addEventListener('change', insertImage);
textBox.addEventListener('keyup', insertText);



