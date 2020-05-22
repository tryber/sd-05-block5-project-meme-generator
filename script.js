let inputText = document.getElementById("text-input");

let memeText = document.getElementById("meme-text");

let btnMandaPraCaixa = document.getElementById("passa-texto-para-caixa");

btnMandaPraCaixa.addEventListener("click", function () {
  memeText.innerHTML = inputText.value;
});

memeText.innerHTML = inputText.value;
