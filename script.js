let caixaTexto = document.getElementById("text-input"); //Pegando o elemento(HTML) pelo Id. Local onde o usuário escreve
let memeText = document.getElementById("meme-text"); //Local onde o texto deverá aparecer
function inserirTexto(){ //Definindo a função para fazer a interação do usuário com a caixa de texto
  memeText.innerText = caixaTexto.value //dentro(innerHTML) do local escolhido, será inserido o valor (value) que o usuario escrever
}
caixaTexto.addEventListener('input', inserirTexto); //Atribuindo um evento para quando o usuário escrever na caixa de texto. Input é o comando que será executado seguindo da função definida


