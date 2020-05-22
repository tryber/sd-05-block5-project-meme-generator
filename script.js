let botaoCriar = document.getElementById("criar");

botaoCriar.addEventListener("click", function() {
    let texto = document.getElementById("text-input").value;
    let textoimg = document.getElementById("meme-text");
    textoimg.innerHTML = texto;
})