/*
 Este script es ejecutado al dar click en el boton del formulario form_usuario.html
 */
function Subir(){
  //Obteniendo el formulario form-1
  var form = document.forms['form-1'];

  //Obteniendo los valores de cada campo
  var usuario = form['usuario'].value;
  var nombre = form['nombre'].value;
  var apellido = form['apellido'].value;
  var email = form['email'].value;
  var contrasehna = form['contrasehna'].value;
  var contrasehna2 = form['contrasehna2'].value;
  var Programar = form['Programar'];
  var Deporte = form['Deporte'];
  var Meditar = form['Meditar'];
  var Cine = form['Cine'];
  var Leer = form['Leer'];
  var Vido_Juegos = form['Vido_Juegos'];

  //Obteniendo el modal que se encuentra en el form_usuaruo.html
  var modal = document.querySelector('#Modal-Danger2');

  //Obteniendo el mensaje del modal
  var mensaje = document.querySelector('#modal__mensaje');
  
  //Obteniendo el titulo del modal
  var title = document.querySelector('.modal-title');

  //Obteniendo todos los elementos con clase .hobies en un arreglo
  var hobies = document.querySelectorAll('.form-check .hobies');
  
  //Seleccionando solo los hobbies que esten seleccionados y agregandolos a un string vacio 
  var hobies_value = '';
 for (var i = 0; i < hobies.length;i++){
   if (hobies[i].checked){
      hobies_value = hobies_value.concat(' ' + hobies[i].value);
   }
 } 
  
  //Verificando que los campos usuario, nombre, apellido, email, contrasehna y contrasehna2 no esten vacios
  if (usuario == '' && nombre == '' && apellido == '' && email == '' && contrasehna == '' && contrasehna2 == ''){
    //En caso de estar vacios modifica el mensaje del modal para indicar el error
    mensaje.innerHTML = "Debe llenar los campos con *";
    modal.click();
  }else{
    //Verificando que el correo tenga un formato valido 
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      //Verificando que las contraseñas coincidan
      if (contrasehna == contrasehna2){
        // Verificando que al menos un hobbie este seleccionado
        if (!(Programar.checked || Deporte.checked || Meditar.checked || Cine.checked || Leer.checked || Vido_Juegos.checked)){
          // Modificando el mensaje del modal
          mensaje.innerHTML = "Debe seleccionar al menos un hobbie";
          modal.click();
        }
        else{
          // Modificando el titulo del modal
          title.innerHTML = "Datos"
          // Modificando el mensaje del modal
          mensaje.innerHTML = "Usuario: "+ usuario + "</br>Nombre: "+ nombre+ "</br>Apellido: "+ apellido+ "</br>Email: "+ email+ "</br>Contraseña: "+ contrasehna + "</br>Contraseña Rep: "+ contrasehna2 + "</br>Hobies: "+ hobies_value;
          modal.click();
        }
      }
      else{
          // Modificando el mensaje del modal
        mensaje.innerHTML = "La contraseña debe coincidir";
        modal.click();
      }
    }else{
          // Modificando el mensaje del modal
      mensaje.innerHTML = "Formato de correo invalido";
      modal.click();

    }
  }
}
