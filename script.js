let text_input = document.getElementById("text-input")
text_input.addEventListener("keyup",function(){
  document.getElementById("meme-text").innerHTML=text_input.value
  });