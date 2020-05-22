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
