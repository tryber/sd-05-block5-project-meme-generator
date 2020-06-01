// Meme Text
const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');

textInput.addEventListener('keyup', function () {
  memeText.innerHTML = textInput.value;
});

// Meme Image
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

memeInsert.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

// Border Buttons
const memeImageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

function changeBorderStyle() {
  if (event.target === fire) {
    memeImageContainer.style.border = '3px dashed red';
  } else if (event.target === water) {
    memeImageContainer.style.border = '5px double blue';
  } else if (event.target === earth) {
    memeImageContainer.style.border = '6px groove green';
  }
}

function clickButton(button) {
  button.addEventListener('click', changeBorderStyle);
}

clickButton(fire);
clickButton(water);
clickButton(earth);

// Meme Image Click
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function clickImage(meme) {
  meme.addEventListener('click', function () {
    if (event.target === meme1) {
      memeImage.src = 'imgs/meme1.png';
    } else if (event.target === meme2) {
      memeImage.src = 'imgs/meme2.png';
    } else if (event.target === meme3) {
      memeImage.src = 'imgs/meme3.png';
    } else if (event.target === meme4) {
      memeImage.src = 'imgs/meme4.png';
    }
  });
}

clickImage(meme1);
clickImage(meme2);
clickImage(meme3);
clickImage(meme4);
