
let txtimput= document.querySelector("#imp");
txtimput.addEventListener("keydown", function(){
  let textMeme = document.querySelector("#meme-text");
  console.log(textMeme.innerHTML.length)
  textMeme.innerHTML = " "
  if(txtimput.value.length < 60){
    textMeme.innerHTML = txtimput.value;
  }
});
