 window.onload {
    const texto = document.getElementById('meme-text');
    const imagem = document.getElementById('meme-image');
    const textoEntrada = document.getElementsById('text-input');
    const imagemEntrada  = document.getElementById('meme-insert');

    texto.addEventListener('keyup1', printTexto)
    imagem.addEventListener('input', printImg)

    function printTexto (){
        texto.innerHTML = textoEntrada.value;
    }

    function printImg (){
        imagem.src = URL.createObjectURL(this.files[0]);
    }
 }