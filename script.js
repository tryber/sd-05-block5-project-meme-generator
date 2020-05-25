window.onload = function(){
  
    let botao1 = document.getElementById("fire");
    let botao2 = document.getElementById("water");
    let botao3 = document.getElementById("earth");
    let caixaColorida = document.getElementById("meme-text");
    let caixaTexto = document.getElementById("text-input");

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
        caixaColorida.innerText = caixaTexto.value;
    }
}










//var p = document.createElement('p');
//p.innerHTML = 'Texto:';
//document.getElementById("meme-image-container").appendChild(p);




    
//document.querySelector("#text-input")
