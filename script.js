let img = document.querySelector("#img2");
let texBox = document.querySelector("#text-box");
let buttonImg = document.querySelector("#img");

function insertImage () {
    document.querySelector("div").innerHTML = img.value;
}

buttonImg.addEventListener('change', insertImage);

