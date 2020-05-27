// let fileTag = document.getElementById("meme-insert");
// let preview = document.getElementById("meme-image");
    
// fileTag.addEventListener("change", function() {
//   changeImage(this);
// });

// function changeImage(input) {
//   let reader;

//   if (input.files) {
//     reader = new FileReader();

//     reader.onload = function(e) {
//       preview.setAttribute("src", e.target.result);
//       console.log(e.target.result);

//     }
//     reader.readAsDataURL(input.files[0]);
//     console.log(input.files[0]);
//   }
// }

// let textInput = document.getElementById("text-input"),
//     memeText = document.getElementById("meme-text"),
//     confirmButton = document.getElementById("confirm-button");

// function insertText() {
//   memeText.innerHTML = textInput.value;
// }

// confirmButton.addEventListener("click", insertText);
/////////////////

let textInput = document.getElementById("text-input"),
  textMeme = document.getElementById("meme-text"),
  memeInsert = document.getElementById("meme-insert"),
  memeImage = document.getElementById("meme-image"),
  confirmButton = document.getElementById("confirm-button");

function insertText() {
  textMeme.innerHTML = textInput.value;
}

function showImage(evento) {
  let image = evento.target.files[0];
  memeImage.src = URL.createObjectURL(image);
}

memeInsert.addEventListener("change", showImage);
confirmButton.addEventListener("click", insertText);
