function Subir(){
  var form = document.forms['form-1'];
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

  var modal = document.querySelector('#Modal-Danger2');
  var mensaje = document.querySelector('#modal__mensaje');
  var title = document.querySelector('.modal-title');

  var hobies = document.querySelectorAll('.form-check .hobies');
  
  var hobies_value = '';
 for (var i = 0; i < hobies.length;i++){
   if (hobies[i].checked){
      hobies_value = hobies_value.concat(' ' + hobies[i].value);
   }
 } 
  
  if (usuario == '' && nombre == '' && apellido == '' && email == '' && contrasehna == '' && contrasehna2 == ''){
    mensaje.innerHTML = "Debe llenar los campos con *";
    modal.click();
  }else{
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      if (contrasehna == contrasehna2){
        if (!(Programar.checked || Deporte.checked || Meditar.checked || Cine.checked || Leer.checked || Vido_Juegos.checked)){
          mensaje.innerHTML = "Debe seleccionar al menos un hobbie";
          modal.click();
        }
        else{
          title.innerHTML = "Datos"
          mensaje.innerHTML = "Usuario: "+ usuario + "</br>Nombre: "+ nombre+ "</br>Apellido: "+ apellido+ "</br>Email: "+ email+ "</br>Contraseña: "+ contrasehna + "</br>Contraseña Rep: "+ contrasehna2 + "</br>Hobies: "+ hobies_value;
          modal.click();
        }
      }
      else{
        mensaje.innerHTML = "La contraseña debe coincidir";
        modal.click();
      }
    }else{
      mensaje.innerHTML = "Formato de correo invalido";
      modal.click();

    }
  }
}
