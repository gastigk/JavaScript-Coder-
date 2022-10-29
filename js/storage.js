const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefono = document.querySelector("#inputTelefono")
const btnEnviar = document.querySelector("button.button")

const almacenarDatos = ()=> {
    if (inputNombre.value.trim() !== "") { localStorage.setItem("Nombre", inputNombre.value) }
    if (inputEmail.value.trim() !== "") { localStorage.setItem("Email", inputEmail.value) }
    if (inputTelefono.value.trim() !== "") { localStorage.setItem("Telefono", inputTelefono.value) }
}

const recuperarDatos = ()=> {
    if (localStorage.getItem("Nombre")) { inputNombre.value = localStorage.getItem("Nombre") }
    if (localStorage.getItem("Email")) { inputEmail.value = localStorage.getItem("Email") }
    if (localStorage.getItem("Telefono")) { inputTelefono.value = localStorage.getItem("Telefono") }
}

btnEnviar.addEventListener("click", almacenarDatos)

document.addEventListener("DOMContentLoaded", recuperarDatos)