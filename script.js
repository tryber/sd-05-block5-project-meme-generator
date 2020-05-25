let botaoCriar = document.getElementById("criar");

botaoCriar.addEventListener("click", function() {
    let texto = document.getElementById("text-input").value;
    let textoimg = document.getElementById("meme-text");
    textoimg.innerHTML = texto;
}) 

  let loadFile = function(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
