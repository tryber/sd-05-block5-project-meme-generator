  window.onload = function() {
    document.getElementById("meme-insert").addEventListener("change", carregaArquivo);
    document.getElementById("text-input").addEventListener("keyup", imprimeTexto);

    

    function carregaArquivo(event) {
      let saida = document.getElementById("meme-image");
      saida.src = URL.createObjectURL(event.target.files[0]);
      saida.onload = function() {
        URL.revokeObjectURL(saida.src);// libera a memoria depois que carregar - o onload carrega logo após ter sido carregado o arquivo todo.
      }
    }

    function imprimeTexto() {
      let texto = document.getElementById("text-input").value;
      console.log(texto);
      let posTexto = document.getElementById("meme-text");
      posTexto.innerHTML = texto;
    }
  }
