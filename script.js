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

//Meme Image Click
let meme1 = document.getElementById("meme-1");
let meme2 = document.getElementById("meme-2");
let meme3 = document.getElementById("meme-3");
let meme4 = document.getElementById("meme-4");

function clickImage (meme) {
  meme.addEventListener("click", function() {
    if(event.target === meme1) {
      memeImage.src="imgs/meme1.png";
    } else if(event.target === meme2) {
      memeImage.src="imgs/meme2.png";
    } else if(event.target === meme3) {
      memeImage.src="imgs/meme3.png"
    } else if(event.target === meme4) {
      memeImage.src="imgs/meme4.png"
    }
  })
}

clickImage(meme1);
clickImage(meme2);
clickImage(meme3);
clickImage(meme4);