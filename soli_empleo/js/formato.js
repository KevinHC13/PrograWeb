//Establecimineto de modo estricto de JS
'use strict'
// Se toman los valores que tiene el URL de la pagina actual
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var datos = {}
// Se toma los valores de la URL para colocarlos en un arreglo
urlParams.forEach(function(value,key){
    datos[key]=value;
});

console.log(datos);

// Se convierte el objeto a un archivo JSON 
var json = JSON.stringify(datos);
// Se crea un objeto blob para darle formato al archivo que se va a descargar
var blob = new Blob([json],{type:'application/json'});

var hipervinculo = document.createElement('a');
hipervinculo.download='datos.json';
hipervinculo.href=window.URL.createObjectURL(blob);

document.body.appendChild(hipervinculo);
//hipervinculo.click();