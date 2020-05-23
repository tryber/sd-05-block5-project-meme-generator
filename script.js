let imagem = document.querySelector("#img2");
let textBox = document.querySelector("#text-input");
let div = document.querySelector("div");
let imgTag = document.createElement("img");
let text = document.querySelector('.text');
let secondDiv = document.createElement('div');



function insertImage () {
    div.appendChild(imgTag);
    imgTag.src = URL.createObjectURL(imagem.files[0]);
}
function insertText() {
    secondDiv.className = 'insert-text'
    document.querySelector('img').appendChild(secondDiv);
    let divText = document.querySelector('.insert-text');
    divText.innerText = textBox.value;
    divText.style.position = "absolute";
}   

imagem.addEventListener('change', insertImage);
textBox.addEventListener('change', insertText);



