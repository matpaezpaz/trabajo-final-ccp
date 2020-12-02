const elementoNombre = document.getElementById('nombre');
const elementoAutor = document.querySelector('#autor');
const elementoTiempoPreparacion = document.querySelector('#tiempo-preparacion');
const elementoIngredientes = document.querySelector('#ingredientes');
const elementoProcedimiento = document.querySelector('#procedimiento');
const elementoBoton = document.querySelector('#btn-agregar-receta');
const elementoListaRecetas = document.querySelector('.lista-recetas');

let recetasAlmacentadas = JSON.parse(localStorage.getItem('recetas'));
for(const receta of recetasAlmacentadas) {
    agregarRecetaAInterfaz(receta);
}


elementoBoton.addEventListener('click', agregarReceta);


function agregarReceta() {
    const receta = {
        nombre: elementoNombre.value,
        autor: elementoAutor.value,
        tiempoPreparacion: elementoTiempoPreparacion.value,
        ingredientes: elementoIngredientes.value,
        procedimiento: elementoProcedimiento.value
    };
    agregarRecetaAAlmacenamiento(receta);
}

function agregarRecetaAInterfaz(receta) {
    const elementoReceta = crearElementoReceta(receta);
    elementoListaRecetas.appendChild(elementoReceta);
}

function agregarRecetaAAlmacenamiento(receta) {
    let recetasAlmacentadas = JSON.parse(localStorage.getItem('recetas'));
    if (!recetasAlmacentadas) {
        recetasAlmacentadas = [];
    }
    recetasAlmacentadas.push(receta);
    localStorage.setItem('recetas', JSON.stringify(recetasAlmacentadas));
}


function crearElementoReceta(receta) {
    const elementoReceta = crearElementoConClaseYTexto('article', 'receta');
    const elementoHeader = crearHeader(receta.nombre, receta.autor);
    elementoReceta.appendChild(elementoHeader);
    const elementoCuerpo = crearCuerpo(receta);
    elementoReceta.appendChild(elementoCuerpo);
    return elementoReceta;
}

function crearHeader(nombreReceta, autor) {
    const elementoHeader = crearElementoConClaseYTexto('header', 'titulo');
    const elementoNombre = crearElementoConClaseYTexto('span', 'nombre-receta', nombreReceta);
    const elementoAutor = crearElementoConClaseYTexto('span', 'autor', autor);
    elementoHeader.appendChild(elementoNombre);
    elementoHeader.appendChild(elementoAutor);
    return elementoHeader;
}

function crearCuerpo(receta) {
    const elementoCuerpo = crearElementoConClaseYTexto('div', 'cuerpo');
    const elementoTiempoPreparacion = crearElementoConClaseYTexto('p', 'tiempo-preparacion', receta.tiempoPreparacion);
    const elementoIngredientes = crearIngredientes(receta.ingredientes);
    const elementoProcedimiento = crearElementoConClaseYTexto('p', 'procedimiento', receta.procedimiento);
    elementoCuerpo.appendChild(elementoTiempoPreparacion);
    elementoCuerpo.appendChild(elementoIngredientes);
    elementoCuerpo.appendChild(elementoProcedimiento);
    return elementoCuerpo;
}
// "agua, fideos, papa"
function crearIngredientes(ingredientes) {
    const elementoIngredientes = crearElementoConClaseYTexto('ul', 'ingredientes');
    const arrayIngredientes = ingredientes.split(',');
    for (const ingrediente of arrayIngredientes) {
        const elementoIngrediente = document.createElement('li');
        elementoIngrediente.innerText = ingrediente.trim();
        elementoIngredientes.appendChild(elementoIngrediente);
    }
    return elementoIngredientes;
}

function crearElementoConClaseYTexto(etiqueta, clase, texto) {
    const elemento = document.createElement(etiqueta);
    elemento.classList.add(clase);
    if (texto) {
        elemento.innerText = texto;
    }
    return elemento;
}