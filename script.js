let imagem = document.querySelector("#img2");
let texBox = document.querySelector("#text-input");
let div = document.querySelector("div");
let imgTag = document.createElement("img")
div.appendChild(imgTag);

function insertImage () {
    imgTag.src = URL.createObjectURL(imagem.files[0]);
}

imagem.addEventListener('change', insertImage);

