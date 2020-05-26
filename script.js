// create variable to store text input
const txt = window.document.querySelector('#text-input');

// add a event listener to add the text to the div meme-text when the user types it
txt.addEventListener('keyup', function () {
  document.querySelector('#meme-text').innerHTML = txt.value;
});

// load image
const inputImg = document.getElementById('meme-insert');
inputImg.onchange = function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};

// create variables to get the buttons that style borders and the image
const earthButton = document.getElementById('earth');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const ctnr = document.getElementById('meme-image-container');

// add event listener to the buttons and apply the style to meme-image-container's border
earthButton.addEventListener('click', function () {
  ctnr.style.border = '6px groove green';
});
fireButton.addEventListener('click', function () {
  ctnr.style.border = '3px dashed red';
});
waterButton.addEventListener('click', function () {
  ctnr.style.border = '5px double blue';
});

// create variables to get each meme sample
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

// add event listener to select the image
meme1.addEventListener('click', function () {
  document.getElementById('meme-image').src = meme1.src;
});
meme2.addEventListener('click', function () {
  document.getElementById('meme-image').src = meme2.src;
});
meme3.addEventListener('click', function () {
  document.getElementById('meme-image').src = meme3.src;
});
meme4.addEventListener('click', function () {
  document.getElementById('meme-image').src = meme4.src;
});
