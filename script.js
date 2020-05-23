window.onload = function (){
  let container=document.querySelector('#meme-text');
  let caixaTexto= document.getElementById('text-input');

  let memeInput = document.getElementById('meme-insert');
  let memeImg = document.getElementById('meme-image');

  //Inserir texto
  function insereTexto () {
    container.innerText = caixaTexto.value;
  }

  caixaTexto.addEventListener('keyup',insereTexto);

  //Inserir imagem
  memeInput.addEventListener("input", (evento) => {
    memeImg.src = URL.createObjectURL(evento.target.files[0]);
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

//Memes famosos
  let meme1 = document.getElementById('meme-1');
  let meme2 = document.getElementById('meme-2');
  let meme3 = document.getElementById('meme-3');
  let meme4 = document.getElementById('meme-4');

  meme1.addEventListener('click',function(){
    memeImg.src='imgs/meme1.png';
  });
  meme2.addEventListener('click',function(){
    memeImg.src='imgs/meme2.png';
  });
  meme3.addEventListener('click',function(){
    memeImg.src='imgs/meme3.png';
  });
  meme4.addEventListener('click',function(){
    memeImg.src='imgs/meme4.png';
  });  
  
}