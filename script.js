//document.body.addEventListener("click", function(){alert("js!")})

// let tinput = document.getElementById("text-input")

// colocar texto na foto:
function colocatextomeme() {
let col = document.getElementById("text-input").value;
document.getElementsByTagName("h2")[0].innerHTML = col;
}

document.getElementById("text-input").addEventListener("keyup", colocatextomeme)

// colocar nova foto

document.getElementById("meme-insert").addEventListener("change", trocaFoto)

function trocaFoto(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("meme-image");
  
  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}
