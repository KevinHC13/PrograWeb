// Funcion llamada al pulsar el boton de enviar de la tabla

// Lista de datos para llenar la tabla  
var productos =  [
  [
    1,
    "Kevin Alejandro",
    "Hernandez",
    "Campillo",
    'kevinale1231@gmail.com',
    '834-257-0272',
    'Calle 1 Colonia 1 No. 453 Cd. Victoria Tamaulipas México',
    'QUMA470929F37',
    'Hogar'
  ],
  [
    2,
    "Ailda Alejandra",
    "Banda",
    "Hernandez",
    'alejandrabh@gmail.com',
    '834-273-2243',
    'Calle 2 Colonia 2 No. 312 Cd. Victoria Tamaulipas México',
    'QUMA470929F34',
    'Hogar'
  ],
  [
    3,
    "Jorge Jhovan",
    "Rodriguez",
    "Moreno",
    'jhovanrdz@gmail.com',
    '834-132-2312',
    'Calle 3 Colonia 3 No. 312 Cd. Victoria Tamaulipas México',
    'QUMA470929F35',
    'Tecnologia'
  ]
];
// Obtiene la tabla principal
var table = document.querySelector("table");
// String para insertar en el cuerpo del html
var contet = "<tr><th>Id</th><th>Nombre</th><th>Alellido paterno</th><th>Alellido materno</th><th>Email</th><th>Telefono</th><th>Direccion</th><th>RFC</th><th>Categoria</th></tr>"
// mostrar todos los productos al cargar la página
//NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
window.addEventListener("DOMContentLoaded", function () {
  display_list();
});
function display_list(){
// Recorre todos los productos
for (var i = 0; i < productos.length; i++){
    // Crea una fila por cada producto
    contet  = contet + '<tr class="item">';
    // Recorre todos los campos de los productos
    for (var j = 0; j < productos[i].length; j++){
      // Inserta todas las prooiedades en columnas
      contet  = contet + "<td>" + productos[i][j] + "</td>";
    }
    // Cierra la fila del producto
    contet  = contet +  '</tr>';
  }
  // Inserta el contenido al cuerpo de la tabla
  table.innerHTML = contet;
}
