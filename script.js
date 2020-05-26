const textoInput = document.getElementById("text-input");
const textoMeme = document.getElementById("meme-text")

textoInput.addEventListener("keyup", function(){
  textoMeme.innerHTML = textoInput.value
});

const output = document.getElementById('meme-image');
document.getElementById('meme-insert').addEventListener('change', event => {
  output.src = '';
  //status.textContent = '';
  const file = event.target.files[0];
  if (!file.type.match('image.*')) {
    status.textContent = 'Error: The selected file does not appear to be an image.'
    return;
  }
  const reader = new FileReader();
  reader.addEventListener('load', event => {
    output.src = event.target.result;
    document.getElementById('meme-image-container').style.width='fit-content';
  });
  reader.readAsDataURL(file);
  console.log(file);
});