//document.body.addEventListener("click", function(){alert("js!")})

// let tinput = document.getElementById("text-input")

function colocatextomeme() {
let col = document.getElementById("text-input").value;
document.getElementsByTagName("h2")[0].innerHTML = col;
}

document.getElementById("text-input").addEventListener("keyup", colocatextomeme)

