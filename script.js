window.onload = function () {
  const botao1 = document.getElementById('fire');
  const botao2 = document.getElementById('water');
  const botao3 = document.getElementById('earth');
  const caixaColorida = document.getElementById('meme-image-container');
  const caixaTexto = document.getElementById('text-input');
  const caixaTextoConteiner = document.getElementById('meme-text');
  const takePicture = document.getElementById('meme-image');
  const imagem1 = document.getElementById('prePronta1');
  const imagem2 = document.getElementById('prePronta2');
  const imagem3 = document.getElementById('prePronta3');
  const imagem4 = document.getElementById('prePronta4');  
  function mudaCor1(){
    caixaColorida.style.borderColor = 'red';
    botao1.style.borderColor = 'red';
    takePicture.style.borderColor = 'red';
  }
  botao1.addEventListener('click', mudaCor1);
  function mudaCor2 () {
    caixaColorida.style.borderColor = 'blue';
    botao2.style.borderColor = 'blue';
    takePicture.style.borderColor = 'blue';
  }  
  botao2.addEventListener('click', mudaCor2);
  function mudaCor3 () {
    caixaColorida.style.borderColor = 'green';
    botao3.style.borderColor = 'green';
    takePicture.style.borderColor = 'green';
  }
  botao3.addEventListener('click', mudaCor3);
  function incluiTexto () {
    caixaTextoConteiner.innerText = caixaTexto.value;
  }  
  caixaTexto.addEventListener('keyup', incluiTexto);

  function insereImagem () {
    takePicture.innerHTML = imagem1.value;
  }

  imagem1.addEventListener('click', insereImagem);
}
