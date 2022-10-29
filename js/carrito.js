// determinamos las constantes y el querySelector al boton Comprar
const carrito = []
const btnComprar = document.querySelector("#btnComprar")

// recuperar de carrito guardado en localstorage, si existiese, al igual que en DOM
const recuperarCarrito = ()=> {
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || []
          carritoRecuperado.forEach(curso => carrito.push(curso))
          carrito.length === 0 && console.warn("Sin carrito previamente guardado.")
}

// cargamos el carrito de los cursos seleccionados
const cargarCarrito = ()=> {
    let tablaBody = ""
    const tbody = document.querySelector("tbody")
          tbody.innerHTML = ""
          carrito.forEach(curso => {
            tablaBody += `<tr>
                            <th class="centrar">${curso.imagen}</th>
                            <th>${curso.nombre}</th>
                            <th>$ ${curso.precio}</th>
                            <th><button id="${curso.nombre}" class="button-delete button-small">x</button></th>
                        </tr>`
          })
          tbody.innerHTML = tablaBody
    let totalCarrito = carrito.reduce((acc, item)=> acc + item.precio, 0 ) // totalización del carrito
        tbody.innerHTML += `<tr>
                                <th></th>
                                <th>TOTAL</th>
                                <th>$ ${totalCarrito.toFixed(2)}</th>
                            </tr>`
        activoBotonesDelete()
}

// activación del click en los botones delete del carrito
const activoBotonesDelete = ()=> { 
    const btnsDelete = document.querySelectorAll(".button-delete.button-small")
          btnsDelete.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                let aEliminar = carrito.findIndex(curso => curso.nombre === e.target.id) // busqueda del index del curso
                    carrito.splice(aEliminar, 1) // se elimina el curso
                    localStorage.setItem("carrito", JSON.stringify(carrito)) // actualización del carrito en el localStorage
                    cargarCarrito() // recarga del carrito 
            })
          })
}

// integración de SweetAlert
const alerta = (titulo, textoBoton)=> {
    return Swal.fire({title: titulo, confirmButtonText: textoBoton})
}

// alerta de carrito vacío
const carritoVacio = ()=> {
      alerta("¡El carrito está vacío!", "OPS!")
}

// alerta de finalización del proceso de compra, vaciado del carrito y redireccionamiento al index
const finalizarCompra = ()=> {
    alerta('Muchas gracias por su compra.', 'FINALIZAR').then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            location.href = 'index.html'
        }
    })
}

// asignación del evento a la constante que BtnComprar
btnComprar.addEventListener("click", ()=> carrito.length === 0 ? carritoVacio() : finalizarCompra() )

// recuperación de carrito
recuperarCarrito()
carrito.length > 0 && cargarCarrito()