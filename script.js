let fileTag = document.getElementById("meme-insert");
let preview = document.getElementById("meme-image");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  let reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

let textInsert = document.getElementById("text-input"),
    textShow = document.getElementById("meme-text"),
    confirmButton = document.getElementById("confirm-button");

function memeText() {
  textShow.innerHTML = textInsert.value;
}

confirmButton.addEventListener("click", memeText);

