//Variáveis de entrada referente ao texto
let textoMeme = document.getElementById("meme-text");
let textoInput = document.getElementById("text-input");
//Variáveis de entrada referente a imagem
let memeImage = document.getElementById("meme-image");
let inputImg = document.getElementById("meme-insert");

//Interação com o usuário, adição de texto e imagem
textoInput.addEventListener("keyup", function(){
  textoMeme.innerHTML = textoInput.nodeValue;
});

inputImg.addEventListener("input", function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});