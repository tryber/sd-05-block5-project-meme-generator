window.onload = function () {
  function carregaArquivo(event) {
    const saida = document.getElementById('meme-image');
    saida.src = URL.createObjectURL(event.target.files[0]);
    saida.onload = function () {
      URL.revokeObjectURL(saida.src);
    }
  };

  function imprimeTexto() {
    let texto = document.getElementById('text-input');
    texto = texto.value;
    const posTexto = document.getElementById('meme-text');
    posTexto.innerHTML = texto;
  };

  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', carregaArquivo);

  const textInput = document.getElementById('text-input');
  textInput.addEventListener('keyup', imprimeTexto);
};
