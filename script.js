//Deixando a caixe de texto interativa

let caixaTexto = document.getElementById("text-input"); //Pegando o elemento(HTML) pelo Id. Local onde o usuário escreve
let memeText = document.getElementById("meme-text"); //Local onde o texto deverá aparecer

function inserirTexto(){ //Definindo a função para fazer a interação do usuário com a caixa de texto
  memeText.innerText = caixaTexto.value //dentro(innerHTML) do local escolhido, será inserido o valor (value) que o usuario escrever
}
caixaTexto.addEventListener('input', inserirTexto); //Atribuindo um evento para quando o usuário escrever na caixa de texto. Input é o comando que será executado seguindo da função definida

//Selecionando imagens para o container

let meme1 = document.getElementById("image1");
let meme2 = document.getElementById("image2");
let meme3 = document.getElementById("image3");
let meme4 = document.getElementById("image4");
let caixaImagem = document.getElementById("meme-image-container");

function inserirMemePronto (){
  caixaImagem.innerHTML = meme1.value
}
caixaImagem.addEventListener('click', inserirMemePronto)
