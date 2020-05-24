function insert() {
  const texto = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerHTML = texto;
}
insert();

// porque usar "event" como parâmetro?
const loadImage = function (event) {
  const memeImage = document.getElementById('meme-image');
  // O método estático URL.createObjectURL() cria um DOMString
  // contendo uma URL que representa o objeto fornecido no parâmetro.
  // O tempo de vida da URL está vinculado ao documento na janela
  // em que foi criado.
  // O novo URL do objeto representa o objeto File ou
  // Blob(arquivo lido como texto ou binário) especificado.
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  // SRC = Se o valor do atributo type for image,
  // este atributo especifica uma URL para a localização de uma
  // imagem a ser exibida no botão gráfico; caso contrário,
  // este atributo é ignorado.
  memeImage.onload = function () {
    // onload para deixar a box em branco enquanto espera um input.
    URL.revokeObjectURL(memeImage.src);
    // Para resetar a memória e não ficar imagens gravadas quando trocá-las.
  };
};


