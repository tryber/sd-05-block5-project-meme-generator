  window.onload = function() {
    let memeInsert = document.getElementById("meme-insert");
    memeInsert.addEventListener("change", carregaArquivo);

    let textInput = document.getElementById("text-input");
    textInput.addEventListener("keyup", imprimeTexto);

    function carregaArquivo(event) {
      const saida = document.getElementById("meme-image");
      saida.src = URL.createObjectURL(event.target.files[0]);
      saida.onload = function() {
        URL.revokeObjectURL(saida.src);
        // libera a memoria depois que carregar - o onload carrega logo após ter sido carregado o arquivo todo.
      }
    }

    function imprimeTexto() {
      let texto = document.getElementById("text-input");
      texto = texto.value;
      console.log(texto);
      let posTexto = document.getElementById("meme-text");
      posTexto.innerHTML = texto;
    }
  }
