
let txtimput= document.querySelector("#text-input");

let textMeme = document.querySelector("#printtxt");

txtimput.addEventListener("keyup", function(){
  
  let cont = textMeme.innerHTML.length;

  if(textMeme.innerHTML.length < 60){
    textMeme.innerHTML = txtimput.value;
  }
  console.log(textMeme.innerHTML.length);  
});

//---------------------------------------------------------
let clearText = document.querySelector("#limpar");
clearText.addEventListener("click", function(){
textMeme.innerHTML = "";
txtimput.value = "";
}); 
//------------------------------------------------------------
let addMeme = document.querySelector("#meme-insert");
let myimg= document.querySelector("#meme-image");
console.log(addMeme.file)
addMeme.addEventListener("change", function(){
  console.log(addMeme.files[0].name);
  myimg.src = URL.createObjectURL(addMeme.files[0]);
});
