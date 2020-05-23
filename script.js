let fileInput = document.querySelector("#meme-insert");
let memeImage = document.querySelector("#meme-image");
let textInput = document.getElementById("text-input");

window.onload = function () {

  let utils = new Utils();
  fileInput.addEventListener("change", process);

  textInput.addEventListener("keyup", function(el){
    let txt = (el.target.value);
    let memeText = document.querySelector("#meme-text");
    memeText.innerHTML = txt;
  });

  function process(element){
    utils.files = [];
    utils.processFile(element);
    loading();
    function loading(){
      if(utils.files.length > 0){
        memeImage.setAttribute("src", utils.files[0]);
        return;
      }
      setTimeout(loading, 300);
    }
  }
}
