// document.body.addEventListener("click", function(){alert("js!")})

// let tinput = document.getElementById("text-input")

// colocar texto na foto:
function colocatextomeme() {
  const coloca = document.getElementById('text-input').value;
  document.getElementsByTagName('h2')[0].innerHTML = coloca;
}

document.getElementById('text-input').addEventListener('keyup', colocatextomeme);

// colocar nova foto

function trocaFoto(event) {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();

  const imgtag = document.getElementById('meme-image');
  reader.onload = function (event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

document.getElementById('meme-insert').addEventListener('change', trocaFoto);

// botões de colocar borda
const bobo = document.getElementById('meme-image-container');

function bfire() {
  bobo.style.borderStyle = 'dashed';
  bobo.style.borderColor = 'red';
  bobo.style.borderWidth = '3px';
}

document.getElementById('fire').addEventListener('click', bfire);

function bwater() {
  bobo.style.borderStyle = 'double';
  bobo.style.borderColor = 'blue';
  bobo.style.borderWidth = '5px';
}

document.getElementById('water').addEventListener('click', bwater);

function bterra() {
  bobo.style.borderStyle = 'groove';
  bobo.style.borderColor = 'green';
  bobo.style.borderWidth = '6px';
}

document.getElementById('earth').addEventListener('click', bterra);

// botões de colocar fundo

const fundo = document.getElementById('meme-image');

function fmeme1() {
  fundo.src = 'imgs/meme1.png';
}

document.getElementById('meme-1').addEventListener('click', fmeme1);

function fmeme2() {
  fundo.src = 'imgs/meme2.png';
}

document.getElementById('meme-2').addEventListener('click', fmeme2);

function fmeme3() {
  fundo.src = 'imgs/meme3.png';
}

document.getElementById('meme-3').addEventListener('click', fmeme3);

function fmeme4() {
  fundo.src = 'imgs/meme4.png';
}

document.getElementById('meme-4').addEventListener('click', fmeme4);
