const boton = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");
 
boton.addEventListener("click", function () {
 
    mensaje.classList.toggle("oculto");
 
    if (mensaje.classList.contains("oculto")) {
        boton.textContent = "Conoce mi propósito";
    } else {
        boton.textContent = "Ocultar mensaje";
    }
 
});
