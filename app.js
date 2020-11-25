const elementoNombre = document.getElementById('nombre');
const elementoAutor = document.querySelector('#autor');
const elementoTiempoPreparacion = document.querySelector('#tiempo-preparacion');
const elementoIngredientes = document.querySelector('#ingredientes');
const elementoProcedimiento = document.querySelector('#procedimiento');
const elementoBoton = document.querySelector('#btn-agregar-receta');

elementoBoton.addEventListener('click', agregarReceta);


function agregarReceta() {
    const receta = {
        nombre: elementoNombre.value,
        autor: elementoAutor.value,
        tiempoPreparacion: elementoTiempoPreparacion.value,
        ingredientes: elementoIngredientes.value,
        procedimiento: elementoProcedimiento.value
    };
    console.log(receta)
}