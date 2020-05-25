window.onload = function(){
  
    let botao1 = document.getElementById("fire");//botao muda cor 
    let botao2 = document.getElementById("water");//botao muda cor
    let botao3 = document.getElementById("earth");//botao muda cor
    let caixaColorida = document.getElementById("meme-image-container");//elemento para servir de "container" para a imagem e para o texto do meme
    let caixaTexto = document.getElementById("text-input");//caixa onde o texto é inserido 
    let takePicture = document.getElementById("meme-insert");//botao para selecionar a imagem
    let caixaTextoConteiner = document.getElementById("meme-text");

    botao1.addEventListener("click", mudaCor1);
    botao2.addEventListener("click", mudaCor2);
    botao3.addEventListener("click", mudaCor3);

    function mudaCor1(){
        caixaColorida.style.borderColor = "red";
    }

    function mudaCor2(){
        caixaColorida.style.borderColor = "blue";
    }

    function mudaCor3(){
        caixaColorida.style.borderColor = "green";
    }

    caixaTexto.addEventListener('keyup', incluiTexto)
    
    function incluiTexto(){
        caixaTextoConteiner.innerText = caixaTexto.value;
    }

    takePicture.addEventListener('click', incluiImagem);
    
}