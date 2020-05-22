// Creation of the element related to the text input and input of its value inside of the correspondent div
let textInput = document.getElementById('text-input');
let memeText = "";
textInput.addEventListener('keyup', getText);
function getText() {
  memeText = textInput.value;
  document.querySelector("#meme-text").innerHTML = memeText;
}

/*let inpputIMG = document.getElementById("img-input");
let memeIMG = "";
inpputIMG.addEventListener('change', getImage);
function getImage(element) {
  memeIMG = element.target.result;
  // memeIMG = inpputIMG.value;
  console.log(memeIMG);
  document.getElementsByTagName("img")[0].src = memeIMG;
  // document.querySelector("#meme-image-container").style.backgroundImage = "url(" + memeIMG + ")";
}*/

function readImage(event) {
  if (event.target.files && event.target.files[0]) {
      let file = new FileReader();
      file.onload = function(e) {
          document.getElementById("meme-image-container").src = e.target.result;
      };       
      file.readAsDataURL(event.target.files[0]);
  }
}
document.getElementById("img-input").addEventListener("change", readImage, false);

