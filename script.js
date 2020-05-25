//Deixando a caixa de texto interativa

let caixaTexto = document.getElementById("text-input"); //Pegando o elemento(HTML) pelo Id. Local onde o usuário escreve
let memeText = document.getElementById("meme-text"); //Local onde o texto deverá aparecer

function inserirTexto(){ //Definindo a função para fazer a interação do usuário com a caixa de texto
  memeText.innerText = caixaTexto.value //dentro(innerHTML) do local escolhido, será inserido o valor (value) que o usuario escrever
}
caixaTexto.addEventListener('input', inserirTexto); //Atribuindo um evento para quando o usuário escrever na caixa de texto. Input é o comando que será executado seguindo da função definida

//Adicionando imagem para criação de novo meme

let memeNovo = document.getElementById("meme-insert"); //Pegando o elemento(HTML) pelo Id. Local onde o usuário escolhe a imagem
let caixaImagem = document.getElementById("meme-image"); //Local onde a imagem deverá aparecer

function addNovoMeme (){
  caixaImagem.src = window.URL.createObjectURL(memeNovo.files[0])
}
memeNovo.addEventListener('change', addNovoMeme);

//Selecionando imagem pronta para o container

let meme1 = document.getElementById("image1");
let meme2 = document.getElementById("image2");
let meme3 = document.getElementById("image3");
let meme4 = document.getElementById("image4");

function addMemePronto (){
  caixaImagem.src = meme1.value
}
meme1.addEventListener('onclick', addMemePronto);
