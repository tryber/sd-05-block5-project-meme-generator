let imagem = document.querySelector("#img2");
let textBox = document.querySelector("#text-input");
let div = document.querySelector("div");
let imgTag = document.createElement("img");
let text = document.querySelector('#text');



function insertImage () {
    div.appendChild(imgTag);
    imgTag.src = URL.createObjectURL(imagem.files[0]);
}
function insertText() {
    let insert = document.querySelector('#text');
    insert.style.position = "absolute";
    insert.innerText = textBox.value;
    
}   

imagem.addEventListener('change', insertImage);
textBox.addEventListener('change', insertText);



