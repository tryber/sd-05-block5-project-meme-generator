let textInput = document.getElementById("text-input");
textInput.addEventListener('keyup', getText);
function getText(){
  var memeText = textInput.nodeValue;
  return memeText;
}

