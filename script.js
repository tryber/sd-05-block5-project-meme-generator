let barra = document.getElementById("text-input");

    barra.addEventListener("input", function() {
    let texto = document.getElementById("text-input").value;
    let textoimg = document.getElementById("meme-text");
    textoimg.innerHTML = texto;
}) 

  let loadFile = function(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src);
    }
  };
   
  if (output.src = undefined) {
    let placeHolder = document.createElement("div");
    placeHolder.id = "placeH";
  }
