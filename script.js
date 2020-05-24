//Variáveis de entrada referente ao texto
let textoMeme = document.getElementById('meme-text');
let textoInput = document.getElementById('text-input');
//Variáveis de entrada referente a imagem
let memeImage = document.getElementById('meme-image');
let inputImg = document.getElementById('meme-insert');

/*Definição da função para adicionar o texto sobre a imagem
verifica se o evento do target for igual ao texto de entrada,
atribui o valor da variável textoInput para o textoMeme*/
function memeText() {
  if (event.target === textoInput) {
    textoMeme.innerText = textoInput.value; 
  }

//Interação com o usuário, adição dos eventos
textoInput.addEventListener('keyup', textoMeme);

//Função anônima para colocar a img selecionada do pc 
//como a img de entrada
inputImg.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});