//Meme Text
let memeText = document.getElementById("meme-text");
let textInput = document.getElementById("text-input");
   
textInput.addEventListener("keyup", function () {
  memeText.innerHTML = textInput.value;
});
   
//Meme Image
let memeImage = document.getElementById("meme-image");
let memeInsert = document.getElementById("meme-insert");
   
memeInsert.addEventListener("input", function() {
  memeImage.src = URL.createObjectURL(this.files[0]);
  })

//Border Buttons
let memeImageContainer = document.getElementById("meme-image-container");
let fire = document.getElementById("fire");
let water = document.getElementById("water");
let earth = document.getElementById("earth");

function changeBorderStyle() {
  if(event.target === fire) {
    memeImageContainer.style.border = "3px dashed red";
  } else if(event.target === water) {
    memeImageContainer.style.border = "5px double blue";
  } else if(event.target === earth) {
    memeImageContainer.style.border = "6px groove green"
  }
};

function clickButton(button) {
button.addEventListener("click", changeBorderStyle)
};

clickButton(fire);
clickButton(water);
clickButton(earth);