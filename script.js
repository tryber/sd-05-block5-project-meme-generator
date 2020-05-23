const fileInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');
const textInput = document.getElementById('text-input');

window.onload = function () {

  const utils = new Utils();
  fileInput.addEventListener('change', process);

  textInput.addEventListener('keyup', function(el) {
    let txt = (el.target.value);
    memeText.innerText = txt;
  });

  function process(element) {
    utils.files = [];
    utils.processFile(element);
    loading();
    function loading(){
      if(utils.files.length > 0) {
        memeImage.setAttribute('src', utils.files[0]);
        return;
      }
      setTimeout(loading, 300);
    }
  }
}
