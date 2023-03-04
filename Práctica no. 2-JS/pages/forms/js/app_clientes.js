/*
 Este script solo se ejecuta al dar click al boton form_productos
 */
function Subir_cliente(){
  console.log("Funciona")
  //Obteniendo el formulario form-1
  var form = document.forms['form-1'];
  // Obteniendo los valores de cada campo
  var id = form['id'].value;
  var nombre = form['nombre'].value;
  var a_paterno = form['a_paterno'].value;
  var a_materno = form['a_materno'].value;
  var email = form['email'].value;
  var tel = form['telefono'].value;
  var direccion = form['direccion'].value;
  var rfc = form['rfc'].value;
  
  // Obteniendo el select del formulario
  var categoria = document.getElementById("categoria").value;
  

  //Obteniendo el modal del archivo form_productos.html
  var modal = document.querySelector('#Modal-Danger2');
  // Obteniendo el mensaje del modal
  var mensaje = document.querySelector('#modal__mensaje');
  // Obteniendo el titulo del modal
  var title = document.querySelector('.modal-title');

 
  // Verificando que los campos codigo, nombre, categoria, precio_venta y precio_compra esten vacios
  if (id == '' || nombre == '' || a_paterno == '' || a_materno == '' || email == '' || tel == '' || direccion == '' || rfc == ''){
    // Si los campos estan vacios modifica el mensaje del modal y lo muestra
    mensaje.innerHTML = "Debe llenar los campos con *";
    modal.click();
  }else{
    //Verifica que el correo tenga un formato valido
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      // Verifica que el telefono tenga un formato valido
      if(/^([0-9]{3})+(-){0,1}([0-9]{3})+(-){0,1}([0-9]{4})$/.test(tel)){
        
        if (/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/.test(rfc)){
          // En caso de que los inputs esten llenos modificar el titulo y mensaje del modal
          title.innerHTML = "Datos"
          mensaje.innerHTML = "Id: "+ id + "</br>Nombre: "+ nombre+ "</br>Apellido Paterno: "+ a_paterno + "</br>Apellido Materno: "+ a_materno + "</br>Email: "+ email + "</br>Telefono: "+ tel + "</br>Direccion: "+ direccion + "</br>RFC: "+ rfc + "</br>Categoria: "+ categoria;
          modal.click();
        }else{
          // Si los campos estan vacios modifica el mensaje del modal y lo muestra
          mensaje.innerHTML = "Formato de RFC es invalido";
          modal.click();  
        }
      }else{
        // Si los campos estan vacios modifica el mensaje del modal y lo muestra
        mensaje.innerHTML = "Formato de telefono invalido. Debe usar 000-000-0000";
        modal.click();  
      }
    }else{
      // Si los campos estan vacios modifica el mensaje del modal y lo muestra
      mensaje.innerHTML = "Formato de correo invalido";
      modal.click();
    }
  }
}
