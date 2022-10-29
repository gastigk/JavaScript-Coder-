// creación de templates para escribir en el HTML
const retornoCard = (curso)=> {
    let {imagen, tipo, nombre, precio} = curso
    return `<div class="card">
                <div class="card-image">${imagen}</div> 
                <div class="card-name">${tipo}</div>
                <div class="card-name">${nombre}</div>
                <div class="card-price">$ ${precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${nombre}" title="Click para agregar al carrito">+</button>
                </div>
            </div>`
}

const retornoError = ()=> {
return  `<div class="card-error">
            <h2>Houston, tenemos un problema 🧨</h2>
            <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
            <h3>Intenta nuevamente en unos instantes...</h3>
        </div>`
}