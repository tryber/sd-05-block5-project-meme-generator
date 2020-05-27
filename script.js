// code by Lyraah
// variáveis e constantes
const imagem = document.querySelector('#meme-insert');
const textBox = document.querySelector('#text-input');
const img = document.querySelector('#meme-image');

// funções e métodos
function insertImage() {
  img.src = URL.createObjectURL(imagem.files[0]);
}

function insertText() {
  const insert = document.querySelector('#meme-text');
  insert.style.position = 'absolute';
  insert.innerText = textBox.value;
}

// eventos
imagem.addEventListener('change', insertImage);
textBox.addEventListener('keyup', insertText);
