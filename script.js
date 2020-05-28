const loadFile = function (event) {
  let image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
};

function escreveCaixaImagem() {
  const caixaTexto = document.getElementById('text-input');
  const tagP = document.getElementById('meme-text');
  tagP.innerText = caixaTexto.value;
}
