function Subir_productos(){
  var form = document.forms['form-1'];
  var codigo = form['codigo'].value
  var nombre = form['nombre'].value
  //var categoria = form['categoria'].value
  var categoria = document.getElementById("categoria").value;
  var precio_venta = form['precio_venta'].value
  var precio_compra = form['precio_compra'].value


  var modal = document.querySelector('#Modal-Danger2');
  var mensaje = document.querySelector('#modal__mensaje');
  var title = document.querySelector('.modal-title');

 
  if (codigo == '' || nombre == '' || categoria == '' || precio_venta == '' || precio_compra == ''){
    mensaje.innerHTML = "Debe llenar los campos con *";
    modal.click();
  }else{
    title.innerHTML = "Datos"
    mensaje.innerHTML = "Codigo: "+ codigo + "</br>Nombre: "+ nombre+ "</br>Categoria: "+ categoria+ "</br>Precio de venta: "+ precio_venta+ "</br>Precio de compra: "+ precio_compra;
    modal.click();
  }
}
