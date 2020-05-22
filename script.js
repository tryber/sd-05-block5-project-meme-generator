let imagem = document.querySelector("#img2");
let texBox = document.querySelector("#text-input");
let buttonImg = document.querySelector("#img");
let div = document.querySelector("div");
let imgTag = document.createElement("img")

function insertImage () {
    div.appendChild(imgTag);
    imgTag.src = imagem.value;
    imgTag.width = "50px"
}

buttonImg.addEventListener('change', insertImage);

