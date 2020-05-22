let loadFile = function (event) {
  let image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
};

function escreveCaixaImagem() {
  let caixaTexto = document.getElementById('text-input');
  let tagP = document.getElementById('meme-text');
  tagP.innerText = caixaTexto.value;
}
