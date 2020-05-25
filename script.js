    const texto = document.getElementById('meme-text');
    const imagem = document.getElementById('meme-image');
    const textoEntrada = document.getElementById('text-input');
    const imagemEntrada  = document.getElementById('meme-insert');

    function printTexto (){
        texto.innerHTML = textoEntrada.value;
    }
    textoEntrada.addEventListener('keyup', printTexto)

    function printImg (){
        imagem.src = URL.createObjectURL(this.files[0]);
    }
    imagemEntrada.addEventListener('input', printImg)
