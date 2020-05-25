
/*Função que modifica o texto encima da imagem */
let textoVl = document.getElementById('text-input');
let resposta = document.getElementById('meme-text');

textoVl.addEventListener("keyup",function(){
   resposta.innerHTML = textoVl.value;       
})
/*Fim da função */
let brImage = document.getElementById('meme-image')
let btnFire = document.getElementById('fire')

    
btnFire.addEventListener('click',function(){
      btnFire.style.borderColor='pink'
      brImage.style.border='2px solid'
      brImage.style.borderColor='crimson'

    })


let brImage2 = document.getElementById('meme-image')
let btnwhater = document.getElementById('water')


btnwhater.addEventListener('click',function(){
btnwhater.style.borderColor='royalblue'
  brImage2.style.border='2px solid'
  brImage2.style.borderColor='royalblue'

})




let brImage3 = document.getElementById('meme-image')
let btnearth = document.getElementById('earth')


btnearth.addEventListener('click',function(){
btnearth.style.borderColor='pink'
brImage3.style.border='2px solid'
brImage3.style.borderColor='mediumseagreen'

})


let loadFile = function(event){
let reader = new FileReader();
reader.onload = function(){
let output = document.getElementById('output')
    output.src = reader.result
}
reader.readAsDataURL(event.target.files[0])

}



let camiho = document.getElementById('output')
let pegarDiv1 = document.getElementById('meme-1')
let pegarDiv2 = document.getElementById('meme-2')
let pegarDiv3 = document.getElementById('meme-3')
let pegarDiv4 = document.getElementById('meme-4')

pegarDiv1.addEventListener('click',function(){
    let idImg1 = document.getElementById('m1')
        camiho.src = idImg1.src
        console.log(idImg1)

})

pegarDiv2.addEventListener('click',function(){
    let idImg2 = document.getElementById('m2')
        camiho.src = idImg2.src
        console.log(idImg2)

})

pegarDiv3.addEventListener('click',function(){
    let idImg3 = document.getElementById('m3')
        camiho.src = idImg3.src
        console.log(idImg3)

})

pegarDiv4.addEventListener('click',function(){
    let idImg4 = document.getElementById('m4')
        camiho.src = idImg4.src
        console.log(idImg4)

})





