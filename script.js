let container=document.querySelector('.container');
let caixaTexto= document.getElementById('text-input');
let imagemInput = document.getElementById('img-input');
console.log(container);
console.log(caixaTexto);
function insereTexto () {
  container.innerText = caixaTexto.value;
}

caixaTexto.addEventListener('keyup',insereTexto);
function insereImg(){
  let arq= document.getElementById('img-input').files[0];
  console.log(arq)
  container.style.backgroundImg='';
}
imagemInput.addEventListener('mouseover',insereImg)

