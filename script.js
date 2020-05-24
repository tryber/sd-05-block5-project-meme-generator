  //let valor = document.getElementById("text-input").value;
  
  //document.querySelector("#meme-text").innerText = valor;

  let input1 = document.getElementById("text-input");
  let input2 = document.querySelector("#meme-text");

  function trocaTexto(){
    input2.innerText = input1.value
  }

  input1.addEventListener('keyup', trocaTexto);