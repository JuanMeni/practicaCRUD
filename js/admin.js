import{Serie} from './serieClass.js';
import{validarCodigo, validarGenero, validarTitulo, validarUrl} from './validaciones.js';

// traemos los elementos que nos interesan del html
let codigo = document.getElementById('codigo');
let titulo = document.getElementById('titulo');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');
let genero = document.getElementById('genero');
let formulario = document.getElementById('formSeries');
let btnCrearSerie = document.getElementById('btnCrearSerie');
const modalAdminSerie = new bootstrap.Modal(document.getElementById('modalSeries'));
console.log(modalAdminSerie);

// si hay algo en el localStorage traer esos datos, si no hay nda listaSeries tiene que ser una []
let listaSeries = JSON.parse(localStorage.getItem('listaSeriesKey')) || [];

// tarea agregar las validaciones
formulario.addEventListener('submit', crearSerie);
codigo.addEventListener('blur', ()=>{validarCodigo(codigo)});
titulo.addEventListener('blur', ()=>{validarTitulo(2, 20, titulo)});
descripcion.addEventListener('blur', ()=>{validarTitulo(2, 200, descripcion)});
imagen.addEventListener('blur', ()=>{validarUrl(imagen)});
genero.addEventListener('change', ()=>{validarGenero(genero)});
btnCrearSerie.addEventListener('click', ()=>{
    modalAdminSerie.show();
})

// Funcion para generar un codigo unico para el "codigo"
// let array = []
// let limite = 1

// while(array.length < limite){
//     let numero = Math.floor(Math.random()*1001)
//     if(!array.includes(numero)){
//         array.push(numero)
//     }
// }

//codigo.innerHTML = `${array}`


function crearSerie(e){
    e.preventDefault()
    console.log('desde la funcion crearSerie')
    // volver a validar todos los campos y si son correctos entonces creamos la serie
    let nuevaSerie = new Serie(codigo.value, titulo.value, descripcion.value, imagen.value, genero.value);
    console.log(nuevaSerie)
    listaSeries.push(nuevaSerie);
    // limpiar el formulario
    limpiarFormulario();
    // guardar la lista de series en localStorage
    guardarListaSeries()
    // cerrar modal que administra la serie
    modalAdminSerie.hide();
    Swal.fire(
        'Serie creada',
        'La serie se creo exitosamente'g,
        'success'
      )

}

function limpiarFormulario(){
    formulario.reset();
    // si usamos las clases isvalid o is-invalid de bootstrap hay que resetearlas
}

function guardarListaSeries(){
    localStorage.setItem('listaSeriesKey',JSON.stringify(listaSeries));
}