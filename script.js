window.onload = function (){
  let container=document.querySelector('#meme-text');
  let caixaTexto= document.getElementById('text-input');

  let memeInput = document.getElementById('meme-insert');
  let meme2 = document.getElementById('meme-image');

  //Inserir texto
  function insereTexto () {
    container.innerText = caixaTexto.value;
  }

  caixaTexto.addEventListener('keyup',insereTexto);

  //Inserir imagem
  memeInput.addEventListener("input", (evento) => {
    meme2.src = URL.createObjectURL(evento.target.files[0]);
  });

//Botões
  let bFire = document.querySelector('#fire');
  let bWater = document.querySelector('#water');
  let bEarth= document.querySelector('#earth');
  let memeIC= document.querySelector('#meme-image-container');

  bFire.addEventListener('click',function(){
    memeIC.style.border='3px dashed red';
  });
  bWater.addEventListener('click',function(){
    memeIC.style.border='5px double blue';
  });
  bEarth.addEventListener('click',function(){
    memeIC.style.border='6px groove green';
  });

}