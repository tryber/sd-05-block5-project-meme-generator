let container=document.querySelector('#meme-text');
let caixaTexto= document.getElementById('text-input');
let imagemInput = document.getElementById('meme-insert');
console.log(container);
console.log(caixaTexto);
function insereTexto () {
  container.innerText = caixaTexto.value;
}

caixaTexto.addEventListener('keyup',insereTexto);
function insereImg(){
  let arq= document.getElementById('meme-insert').files[0];
  console.log(arq)
  container.style.backgroundImg='';
}
imagemInput.addEventListener('mouseover',insereImg)

