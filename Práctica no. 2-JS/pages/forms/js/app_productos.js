/*
 Este script solo se ejecuta al dar click al boton form_productos
 */
function Subir_productos(){
  //Obteniendo el formulario form-1
  var form = document.forms['form-1'];
  // Obteniendo los valores de cada campo
  var codigo = form['codigo'].value
  var nombre = form['nombre'].value
  // Obteniendo el select del formulario
  var categoria = document.getElementById("categoria").value;
  var precio_venta = form['precio_venta'].value
  var precio_compra = form['precio_compra'].value


  //Obteniendo el modal del archivo form_productos.html
  var modal = document.querySelector('#Modal-Danger2');
  // Obteniendo el mensaje del modal
  var mensaje = document.querySelector('#modal__mensaje');
  // Obteniendo el titulo del modal
  var title = document.querySelector('.modal-title');

 
  // Verificando que los campos codigo, nombre, categoria, precio_venta y precio_compra esten vacios
  if (codigo == '' || nombre == '' || categoria == '' || precio_venta == '' || precio_compra == ''){
    // Si los campos estan vacios modifica el mensaje del modal y lo muestra
    mensaje.innerHTML = "Debe llenar los campos con *";
    modal.click();
  }else{
    // En caso de que los inputs esten llenos modificar el titulo y mensaje del modal
    title.innerHTML = "Datos"
    mensaje.innerHTML = "Codigo: "+ codigo + "</br>Nombre: "+ nombre+ "</br>Categoria: "+ categoria+ "</br>Precio de venta: "+ precio_venta+ "</br>Precio de compra: "+ precio_compra;
    modal.click();
  }
}
