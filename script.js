window.onload = function() {
    const botao1 = document.getElementById('fire');
    const botao2 = document.getElementById('water');
    const botao3 = document.getElementById('earth');
    const caixaColorida = document.getElementById('meme-image-container');
    const caixaTexto = document.getElementById('text-input');
    //const takePicture = document.getElementById('meme-insert');
    const caixaTextoConteiner = document.getElementById('meme-text');
    
    function mudaCor1() {
        caixaColorida.style.borderColor = 'red';
    }

    botao1.addEventListener('click', mudaCor1);
    
    function mudaCor2() {
        caixaColorida.style.borderColor = 'blue';
    }

    botao2.addEventListener('click', mudaCor2);
    
    function mudaCor3() {
        caixaColorida.style.borderColor = 'green';
    }

    botao3.addEventListener('click', mudaCor3);
    
    function incluiTexto() {
        caixaTextoConteiner.innerText = caixaTexto.value;
    }

    caixaTexto.addEventListener('keyup', incluiTexto);
};
