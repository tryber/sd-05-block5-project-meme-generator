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
memeInput.addEventListener("input", (event) => {
  meme2.src = URL.createObjectURL(event.target.files[0]);
});

}