
<script>
let textoVl = document.getElementById('text-input');
let resposta = document.getElementById('meme-text');

textoVl.addEventListener("keyup",function(){
  
  resposta.innerHTML = textoVl.value;

})
</script>