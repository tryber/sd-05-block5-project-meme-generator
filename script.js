// Deixando a caixa de texto interativa

const caixaTexto = document.getElementById("text-input"); // Pegando o elemento(HTML) pelo Id. Local onde o usuário escreve
const memeText = document.getElementById("meme-text"); // Local onde o texto deverá aparecer
caixaTexto.addEventListener('keyup', inserirTexto); // Atribuindo um evento para quando o usuário escrever na caixa de texto. Input é o comando que será executado seguindo da função definida

function inserirTexto() { // Definindo a função para fazer a interação do usuário com a caixa de texto
  memeText.innerText = caixaTexto.value; // dentro(innerHTML) do local escolhido, será inserido o valor (value) que o usuario escrever
}


// Adicionando imagem para criação de novo meme

const memeNovo = document.getElementById("meme-insert"); // Pegando o elemento(HTML) pelo Id. Local onde o usuário escolhe a imagem
const caixaImagem = document.getElementById("meme-image"); // Local onde a imagem deverá aparecer

function addNovoMeme() {
 caixaImagem.src = window.URL.createObjectURL(memeNovo.files[0]); // Colocando o local de onde a imagem será selecionada
}
memeNovo.addEventListener('change', addNovoMeme);

