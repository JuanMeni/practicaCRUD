import{Serie} from './serieClass.js';
import{validarCodigo, validarGenero, validarTitulo, validarUrl} from './validaciones.js';

// traemos los elementos que nos interesan del html
let codigo = document.getElementById('codigo')
let titulo = document.getElementById('titulo')
let descripcion = document.getElementById('descripcion')
let imagen = document.getElementById('imagen')
let genero = document.getElementById('genero')
let formulario = document.getElementById('formSeries')
let listaSeries = [];

// tarea agregar las validaciones
codigo.addEventListener('blur', ()=>{validarCodigo(codigo)});
titulo.addEventListener('blur', ()=>{validarTitulo(2, 20, titulo)});
descripcion.addEventListener('blur', ()=>{validarTitulo(2, 200, descripcion)});
imagen.addEventListener('blur', ()=>{validarUrl(imagen)});
genero.addEventListener('change', ()=>{validarGenero(genero)});


formulario.addEventListener('submit', crearSerie);

function crearSerie(e){
    e.preventDefault()
    console.log('desde la funcion crearSerie')
    // volver a validar todos los campos y si son correctos entonces creamos la serie
    let nuevaSerie = new Serie(codigo.value, titulo.value, descripcion.value, imagen.value, genero.value);
    console.log(nuevaSerie)
    listaSeries.push(nuevaSerie);
    // limpiar el formulario
    limpiarFormulario();
}

function limpiarFormulario(){
    formulario.reset();
}