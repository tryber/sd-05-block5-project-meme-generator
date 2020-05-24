let inputText = document.getElementById("text-input")
let memeText = document.getElementById("meme-text")

inputText.addEventListener("keyup",function (){
    memeText.innerText = inputText.value
})

let memeInsert = document.getElementById("meme-insert")
let memeImage = document.getElementById("meme-image")

memeInsert.addEventListener("change", function(evento){
    let imagem = evento.target.files[0]
    memeImage.src=URL.createObjectURL(imagem)  
})
