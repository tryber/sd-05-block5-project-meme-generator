window.onload = () => {
    //Variables
    const memeImage = document.getElementById("meme-image"); //box image
    const memeInsert = document.getElementById("meme-insert"); //select image
    const memeText = document.getElementById("meme-text"); //text image
    const textInput = document.getElementById("text-input"); //box text
  
    //Event + Function uploadImage
    memeInsert.addEventListener("input", () => memeImage.src = URL.createObjectURL(memeInsert.files[0]));
  
    //Event + Function textImage
    textInput.addEventListener("input", () => memeText.innerHTML = textInput.value);
  };


  
  function openImage(image) {
    document.getElementById("meme-image").src = image
  };
