const imagem = document.querySelector('#meme-insert');
const textBox = document.querySelector('#text-input');
const div = document.querySelector('div');
const text = document.querySelector('#meme-text');
const img = document.querySelector('#meme-image');

function insertImage() {
  img.src = URL.createObjectURL(imagem.files[0]);
}
function insertText() {
  let insert = document.querySelector('#meme-text');
  insert.style.position = 'absolute';
  insert.innerText = textBox.value;
}   

imagem.addEventListener('change', insertImage);
textBox.addEventListener('keyup', insertText);
