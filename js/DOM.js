// creación de constantes
const carrito = []
const container = document.querySelector("div.container")

// primero asigno evento 'click' iterando en los botones de las tarjetas
const activarBotones = ()=> {
    const botones = document.querySelectorAll(".button.button-outline.button-add")
          botones.forEach(btn => btn.addEventListener("click", (e)=> agregarCarrito(e)))
}

// armado de tarjetas en pantalla recorriendo el array Cursos y activación de evento en botones
const cargarMisCursos = ()=> { 
    container.innerHTML = ""
    cursos.forEach(curso => container.innerHTML += retornoCard(curso))
    activarBotones()
}

// agrego sistema de notificación con Toastify
const toast = (mensaje)=> {
    Toastify({
        text: mensaje,
        duration: 3300,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}

// agregar cursos al carrito de compras
const agregarCarrito = (e)=> { 
    let resultado = cursos.find(curso => curso.nombre === e.target.id) // así captamos el ID de nuestro producto
        if (resultado !== undefined) {
            carrito.push(resultado)
            guardarCarrito()
            toast(`'${e.target.id}' se agregó a tu carrito`)
        }
}

// guardado de carrito en localstorage
const guardarCarrito = ()=> {
    if (carrito.length > 0) { localStorage.setItem("carrito", JSON.stringify(carrito)) }
}

// recuperar de carrito guardado en localstorage, si existiese
const recuperarCarrito = ()=> {
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || []
          carritoRecuperado.forEach(curso => carrito.push(curso))
          carrito.length === 0 && console.warn("Sin carrito previamente guardado.")
}
recuperarCarrito()

// cargo los cursos en el index
cargarMisCursos() 