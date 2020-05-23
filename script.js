function addMemeText() {
  const memeText = document.getElementById('text-input').value;
  document.querySelector('#meme-text').innerText = memeText;
}

const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', addMemeText);

function changeImg(event) {
  if (event.target.files && event.target.files[0]) {
    const file = new FileReader();
    file.onload = function (e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
  }
}

const memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', changeImg, false);
