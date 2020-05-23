//Para onde vai o texto e a imagem.
let imgContainer = document.getElementById('meme-image-container');
let textoInput = document.getElementById('meme-text');
//Origem dos valores.
let inputOrigem = document.getElementById('text-input');
let sendImg = document.getElementById('meme-image');

inputOrigem.addEventListener('keyup', function memeText() {
    textoInput.innerHTML = inputOrigem.value;
});

//Definindo as imagens selecionadas para a caixa de meme.
let primeiroMeme = document.getElementById('meme-1');
primeiroMeme.addEventListener('click', function memeum() {
    sendImg.src = primeiroMeme.src;
});

let segundoMeme = document.getElementById('meme-2');
segundoMeme.addEventListener('click', function memedois() {
    sendImg.src = segundoMeme.src;
});

let terceiroMeme = document.getElementById('meme-3');
terceiroMeme.addEventListener('click', function memetres() {
    sendImg.src = terceiroMeme.src;
});

let quartoMeme = document.getElementById('meme-4');
quartoMeme.addEventListener('click', function memequatro() {
    sendImg.src = quartoMeme.src;
});

let quintoMeme = document.getElementById('meme-5');
quintoMeme.addEventListener('click', function memecinco() {
    sendImg.src = quintoMeme.src;
});

let sextoMeme = document.getElementById('meme-6');
sextoMeme.addEventListener('click', function memeseis() {
    sendImg.src = sextoMeme.src;
});
