const memeImage = document.getElementById('memeImage');
const textInput = document.getElementById('textInput');
const imgContainer = document.getElementById('memeImageContainer');
const memeText = document.getElementById('memeText');
const memeInsert = document.getElementById('memeInsert');
const fire = document.getElementById('fogo');
const water = document.getElementById('agua');
const earth = document.getElementById('terra');
const memeUm = document.getElementById('meme1');
const memeDois = document.getElementById('meme2');
const memeTres = document.getElementById('meme3');
const memeQuatro = document.getElementById('meme4');

function caixaTxt() {
  if (event.target === textInput) {
  memeText.innerText = textInput.value;
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
    memeImage.src = 'imgs/meme4.png';
    caixaTxtDoMeme.style.left = '40px';
    caixaTxtDoMeme.style.top = '80px';
    caixaTxtDoMeme.style.width = '340px';
    caixaTxtDoMeme2.style.visibility = 'visible';
    caixaTxtDoMeme2.style.left = '40px';
    caixaTxtDoMeme2.style.top = '420px';
    caixaTxtDoMeme2.style.width = '340px';
  }
  if (event.target === memeTres) {
    memeImage.src = 'imgs/meme3.png';
    caixaTxtDoMeme.style.left = '40px';
    caixaTxtDoMeme.style.top = '80px';
    caixaTxtDoMeme.style.width = '340px';
    caixaTxtDoMeme2.style.visibility = 'visible';
    caixaTxtDoMeme2.style.left = '40px';
    caixaTxtDoMeme2.style.top = '400px';
    caixaTxtDoMeme2.style.width = '340px';
  }
  if (event.target === memeDois) {
    memeImage.src = 'imgs/meme2.png';
    caixaTxtDoMeme.style.left = '40px';
    caixaTxtDoMeme.style.top = '80px';
    caixaTxtDoMeme.style.width = '340px';
    caixaTxtDoMeme2.style.visibility = 'hidden';
  if (event.target === memeUm) {
    memeImage.src = 'imgs/meme1.png';
    caixaTxtDoMeme.style.left = '10px';
    caixaTxtDoMeme.style.top = '200px';
    caixaTxtDoMeme.style.width = '200px';
    caixaTxtDoMeme2.style.visibility = 'visible';
    caixaTxtDoMeme2.style.left = '200px';
    caixaTxtDoMeme2.style.top = '300px';
    caixaTxtDoMeme2.style.width = '200px';
  }
}

textInput.addEventListener('keyup', memeText);
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