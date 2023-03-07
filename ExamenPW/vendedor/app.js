// Funcion llamada al pulsar el boton de enviar de la tabla
function productos(){
    window.location.href = "producto.html"
}
window.addEventListener("DOMContentLoaded", function () {
    display_list();
  });

/*
 Este script solo se ejecuta al dar click al boton form_productos
 */
 function Subir_productos(){
    //Obteniendo el formulario form-1
    var form = document.forms['form-1'];
    // Obteniendo los valores de cada campo
    var codigo = form['codigo'].value;
    var nombre = form['nombre'].value;
    var desc = form['descripcion'].value;
    var precio = form['precio'].value;
    var fecha = form['f_captura'].value;
    var nota = form['nota'].value;
  
    //Obteniendo el modal del archivo form_productos.html
    var modal = document.querySelector('#Modal-Danger2');
    // Obteniendo el mensaje del modal
    var mensaje = document.querySelector('#modal__mensaje');
    // Obteniendo el titulo del modal
    var title = document.querySelector('.modal-title');
  
   
    // Verificando que los campos codigo, nombre, categoria, precio_venta y precio_compra esten vacios
    if (codigo == '' || nombre == '' || desc == '' || precio == '' || fecha == '' || nota == ''){
      // Si los campos estan vacios modifica el mensaje del modal y lo muestra
      mensaje.innerHTML = "Debe llenar los campos con *";
      modal.click();
    }else{
      // En caso de que los inputs esten llenos modificar el titulo y mensaje del modal
      title.innerHTML = "Datos"
      mensaje.innerHTML = "Id: "+ codigo + "</br>Nombre del producto: "+ nombre+ "</br>Descripcion: "+ desc+ "</br>Precio: "+ precio+ "</br>Fecha de registro: "+ fecha + "</br>Notas: " + nota;
      modal.click();
    }
  }


function display_list(){
// Lista de datos para llenar la tabla  
var productos = [
    [
      "Kevin Alejandro Hernandez Campillo",
      "Botín Flexi Para Mujer",
      `Este producto forma parte de nuestra línea de dama semivestir con inspiración western.`,
      "1,249",
      "13/02/2023"
    ],
    [
      "Aida Alejandra Banda Hernandez",
      "Laptop Gateway 15.6 4gb",
      `La laptop Gateway Notebook Ultra Slim GWNC31514-BK es una solución tanto para trabajar y estudiar como para entretenerte.`,
      "4,829",
      "1/02/2023"
    ],
    [
      "Jorge Jhovan Rodriguez Moreno",
      "Sala Económica Esquinera",
      `La mejor opción para tu primera sala fabricada con materiales básicos asequible al bolsillo.`,
      "5,960",
      "9/08/2023"
    ],
    [
      "Mauricio Hernandez",
      "Taladro percutor inalámbrico de 10mm 21V",
      `Con el taladro eléctrico Teeno 5816-1 podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.`,
      "681",
      "5/07/2023"
    ],
    [
      "Marisol Remero Hernandez",
      "Burago Redbull F1 Rb18",
      `IMPORTANTE ANTES DE COMPRAR: este es un modelo 1:43 solo para colección, los controladores no están incluidos.`,
      "298",
      "7/11/2023"
    ],
    [
      "Kevin Alejandro Hernandez Campillo",
      "Gorra De Béisbol Cómoda",
      `Nuestro producto adopta un diseño de hebilla ajustable, puede ajustar el tamaño usted mismo, fácil y conveniente de usar. Bienvenido a su compra. Gracias.`,
      "93",
      "4/12/2023"
    ],
    [
      "Aida Alejandra Banda Hernandez",
      "Tablet Samsung Galaxy Tab A A7",
      `Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades.`,
      "2,899",
      "9/05/2023"
    ],
    [
      "Jose Alfredo Perez",
      "Estufa empotrable Mabe Diseño XOC80800CT1 ",
      `Mabe cuenta con más de 70 años de trayectoria en el mercado de electrodomésticos, dedicada a brindar a soluciones prácticas para el bienestar de los hogares.`,
      "15,198",
      "11/06/2023"
    ],
    [
      "Reberto Bolaños",
      "Smart TV Hisense A4",
      `Con el Smart TV 100012589 accederás a las aplicaciones donde se encuentran tus contenidos favoritos`,
      "3,599",
      "3/01/2023"
    ],
    [
      "Jesus Ernesto Hernandez Campillo",
      "Sierra Circular Eléctrica Pretul Sici-7-1/4p",
      `La sierra Pretul SICI-7-1/4P es la solución para realizar cortes con precisión y velocidad.`,
      "1138",
      "15/11/2023"
    ]
  ];
// Obtiene la tabla principal
var table = document.querySelector("table");

// String para insertar en el cuerpo del html
var contet = '<th>Usuario</th><th>Nombre del producto</th><th>Descripcion</th><th>Precio</th><th>Fecha de entrega</th>'

// Recorre todos los productos
for (var i = 0; i < productos.length; i++){
  // Crea una fila por cada producto
  contet  = contet + '<tr class="item">';
  // Recorre todos los campos de los productos
  for (var j = 0; j < 5; j++){
    // Inserta todas las prooiedades en columnas
    contet  = contet + "<td>" + productos[i][j] + "</td>";
  }
  // Cierra la fila del producto
  contet  = contet +  '</tr>';
}
// Inserta el contenido al cuerpo de la tabla
table.innerHTML = contet;
  

}