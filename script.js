const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const imgContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memeUm = document.getElementById('meme1');
const memeDois = document.getElementById('meme2');
const memeTres = document.getElementById('meme3');
const memeQuatro = document.getElementById('meme4');

function caixaTxt() {
  memeText.textContent = textInput.value;
}

function changeBorder() {
  if (event.target === fire) {
    imgContainer.style.borderColor = 'red';
    imgContainer.style.borderWidth = '3px';
    imgContainer.style.borderStyle = 'dashed';
  }
  if (event.target === water) {
    imgContainer.style.borderColor = 'blue';
    imgContainer.style.borderWidth = '5px';
    imgContainer.style.borderStyle = 'double';
  }
  if (event.target === earth) {
    imgContainer.style.borderColor = 'green';
    imgContainer.style.borderWidth = '6px';
    imgContainer.style.borderStyle = 'groove';
  }
}

function changePic() {
  if (event.target === memeQuatro) {
    memeImage.src = '/imgs/meme4.png';
    caixaTxtDoMeme4.style.left = '40px';
    caixaTxtDoMeme4.style.top = '80px';
    caixaTxtDoMeme4.style.width = '340px';
    caixaTxtDoMeme4.style.visibility = 'visible';
    caixaTxtDoMeme4.style.left = '40px';
    caixaTxtDoMeme4.style.top = '420px';
    caixaTxtDoMeme4.style.width = '340px';
  }
  if (event.target === memeTres) {
    memeImage.src = '/imgs/meme3.png';
    caixaTxtDoMeme3.style.left = '40px';
    caixaTxtDoMeme3.style.top = '80px';
    caixaTxtDoMeme3.style.width = '340px';
    caixaTxtDoMeme3.style.visibility = 'visible';
    caixaTxtDoMeme3.style.left = '40px';
    caixaTxtDoMeme3.style.top = '400px';
    caixaTxtDoMeme3.style.width = '340px';
  }
  if (event.target === memeDois) {
    memeImage.src = '/imgs/meme2.png';
    caixaTxtDoMeme2.style.left = '40px';
    caixaTxtDoMeme2.style.top = '80px';
    caixaTxtDoMeme2.style.width = '340px';
    caixaTxtDoMeme2.style.visibility = 'hidden';
    }
  if (event.target === memeUm) {
    memeImage.src = '/imgs/meme1.png';
    caixaTxtDoMeme1.style.left = '10px';
    caixaTxtDoMeme1.style.top = '200px';
    caixaTxtDoMeme1.style.width = '200px';
    caixaTxtDoMeme1.style.visibility = 'visible';
    caixaTxtDoMeme1.style.left = '200px';
    caixaTxtDoMeme1.style.top = '300px';
    caixaTxtDoMeme1.style.width = '200px';
  }
}

textInput.addEventListener('keyup', caixaTxt);
memeInsert.addEventListener('input', function () {
memeImage.src = URL.createObjectURL(this.files[0]);
});
fire.addEventListener('click', changeBorder);
water.addEventListener('click', changeBorder);
earth.addEventListener('click', changeBorder);
memeUm.addEventListener('click', changePic);
memeDois.addEventListener('click', changePic);
memeTres.addEventListener('click', changePic);
memeQuatro.addEventListener('click', changePic);
