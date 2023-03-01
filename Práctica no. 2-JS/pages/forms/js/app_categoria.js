/*
 Este script solo se ejecuta al dar click al boton del formulario en form_categorai
 */
function Subir_categoria(){
  // Obteniendo el formulario form-1
  var form = document.forms['form-1'];
  // Obteniendo los valores de los campos
  var clave = form['clave'].value;
  var nombre = form['nombre'].value;

  // Obteniendo el modal ubicado en form_categoria.html
  var modal = document.querySelector('#Modal-Danger2');
  // Obteniendo el mensaje del modal
  var mensaje = document.querySelector('#modal__mensaje');
  // Obteniendo el titulo del modal
  var title = document.querySelector('.modal-title');

 
  // Verificando que los campos clave y nombre esten vacios
  if (clave == '' || nombre == '' ){
    //Si estan vacios modifica el mensaje del modal y lo lanza
    mensaje.innerHTML = "Debe llenar los campos con *";
    modal.click();
  }else{
    //Si no estan vacios se modifica el titulo y mensaje y lanza el modal
    title.innerHTML = "Datos"
    mensaje.innerHTML = "Calve: "+ clave + "</br>Nombre: "+ nombre;
    modal.click();
  }
}
