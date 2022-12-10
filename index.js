const input = document.getElementById("code")
const btn = document.getElementById("btn")
const firstPage = document.getElementById("first-page")
const secondPage = document.getElementById("second-page")
const contra = "RAGOOD"

secondPage.style.display = "none"

btn.addEventListener("click", cambiarPantalla)

function cambiarPantalla() {
    if (input.value == contra) {
        firstPage.style.display = "none"
        secondPage.style.display = "flex"
    } else {
        alert("Sino eres host, PORFA vete de esta página")
        location.reload();
    }
}