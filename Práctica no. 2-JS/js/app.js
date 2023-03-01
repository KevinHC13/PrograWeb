/*
 Este script valida los datos del login ubicado en el archivo index.html
 */

//Declaracion de las credenciales locales
var usuario_local = 'admin'
var contrasehna_local = 'admin'

//Funcion llamada al dar click en el boton de enviar del login
function Login(){
  // Obteniendo el modal ubicado en el index.html
  var modal = document.querySelector('#Modal-Danger2');
  
  //Obteniendo el valor de cada campo
  var form = document.forms['form-1']
  var usuario = form['usuario'].value;
  var contrasehna = form['contrasehna'].value;
  
  //Verificando si los datos ingresados coinsiden con las credenciales locales
  if (usuario_local == usuario && contrasehna_local == contrasehna){
    window.location.assign('dasboard.html'); //Redireccionando a dashboard.html en caso de que las credenciales coinsidan
  }
  else{
    //Mostrando modal de error en caso de que las credenciales sean incorrectas
    var mensaje = document.querySelector('#modal__mensaje');
    mensaje.innerHTML = "Usuario o contraseña incorrectas";
    modal.click();
  }

}
