let botaoCriar = document.getElementById("criar");

botaoCriar.addEventListener("click", function() {
    let texto = document.getElementById("text-input").value;
    let textoimg = document.getElementById(id="meme-image-container");
    textoimg.innerHTML = texto;
})