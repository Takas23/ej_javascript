var botones = document.querySelectorAll("button")
var imagenes = document.querySelectorAll("img")

function imagenToggle(imagen) {
    imagen.classList.toggle("oculto")
}

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", imagenToggle(i))
}