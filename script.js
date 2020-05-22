//document.body.addEventListener("click", function(){alert("js!")})

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

//botões de colocar borda
let bobo = document.getElementById('meme-image-container');

function bfire() {
bobo.style.borderStyle= 'dashed'
bobo.style.borderColor='red'
bobo.style.borderWidth = '3px'
}

document.getElementById('fire').addEventListener('click', bfire);

function bwater() {
  bobo.style.borderStyle= 'double'
  bobo.style.borderColor='blue'
  bobo.style.borderWidth = '5px'
  }
  
  document.getElementById('water').addEventListener('click', bwater);
  
  function bterra() {
    bobo.style.borderStyle= 'groove'
    bobo.style.borderColor='green'
    bobo.style.borderWidth = '6px'
    }
    
    document.getElementById('earth').addEventListener('click', bterra);





