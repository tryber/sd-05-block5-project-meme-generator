//document.body.addEventListener("click", function(){alert("js!")})

// let tinput = document.getElementById("text-input")

// colocar texto na foto:
function colocatextomeme() {
  let coloca = document.getElementById('text-input').value;
  document.getElementsByTagName('h2')[0].innerHTML = coloca;
}

document.getElementById('text-input').addEventListener('keyup', colocatextomeme);

// colocar nova foto

function trocaFoto(event) {
  let selectedFile = event.target.files[0];
  let reader = new FileReader();

  let imgtag = document.getElementById('meme-image');
  
  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

document.getElementById('meme-insert').addEventListener('change', trocaFoto);
