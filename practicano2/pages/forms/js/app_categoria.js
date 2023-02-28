function Subir_categoria(){
  var form = document.forms['form-1'];
  var clave = form['clave'].value;
  var nombre = form['nombre'].value;

  var modal = document.querySelector('#Modal-Danger2');
  var mensaje = document.querySelector('#modal__mensaje');
  var title = document.querySelector('.modal-title');

 
  if (clave == '' || nombre == '' ){
    mensaje.innerHTML = "Debe llenar los campos con *";
    modal.click();
  }else{
    title.innerHTML = "Datos"
    mensaje.innerHTML = "Calve: "+ clave + "</br>Nombre: "+ nombre;
    modal.click();
  }
}
