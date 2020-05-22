//Primeiro, interagir com o input de texto do usuario.
//declarar as 2 var interessantes aqui
let textInput = document.getElementById("text-input");
let textMeme = document.getElementById("meme-text");
//+ escrever function para pegar o input e fazê-lo aparecer quando o user digita o texto:
let userTextMeme = "";
function getTextInput() {
  userTextMeme = textInput.value;
  textMeme.innerHTML = userTextMeme;
}
textInput.addEventListener("keyup", getTextInput);

//Agora vou cuidar da IMAGEM.
//declaro as 2 var interessantes sobre img
let picInput = document.getElementById("meme-insert");
let picMeme = document.getElementById("meme-image");
// Segundo, function para pegar a imagem. Babysteps:
//1) vou ter que sentir a mudança no input, conclusão, aqui event final pode ser change.
//2) Tenho que acessar o que recebi, pegar o arquivo de origem, com event.target.file
//3) Devo traduzir o que recebi em algo que <img> vai entender e mostrar, com createObjectURL ou FileReader, prefiro o primeiro.
function displayImage(event) {
  let file = event.target.files[0];
  picMeme.src = URL.createObjectURL(file);
  // URL.revokeObjectURL(picMeme.src); //linha extra para liberar memoria, aparadamente boa pratica 
}
picInput.addEventListener("change", displayImage);








