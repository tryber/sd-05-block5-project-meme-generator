
function update_image(){
  let img = document.querySelector('img'); 
  let file = document.querySelector('input[type=file]').files[0]; 
  img.src =  window.URL.createObjectURL(file);

}

function update_text(){

let user_text = document.getElementById("text-input");
  let meme_text = document.getElementById("meme-text");
  meme_text.innerHTML = user_text.value;
  
}
