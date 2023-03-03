// Funcion llamada al pulsar el boton de enviar de la tabla
function productos(){
  // Lista de datos para llenar la tabla  
  var productos =  [
    [
      1,
      "Botín Flexi Para Mujer",
      "Ropa",
      "1,249",
      `Este producto forma parte de nuestra línea de dama semivestir con inspiración western.`
    ],
    [
      2,
      "Laptop Gateway 15.6 4gb",
      "Tecnologia",
      "4,829",
      `La laptop Gateway Notebook Ultra Slim GWNC31514-BK es una solución tanto para trabajar y estudiar como para entretenerte.`
    ],
    [
      3,
      "Sala Económica Esquinera",
      "Hogar",
      "5,960",
      `La mejor opción para tu primera sala fabricada con materiales básicos asequible al bolsillo.`
    ],
    [
      4,
      "Taladro percutor inalámbrico de 10mm 21V",
      "Herramientas",
      "681",
      `Con el taladro eléctrico Teeno 5816-1 podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.`
    ],
    [
      5,
      "Burago Redbull F1 Rb18",
      "Jugetes",
      "298",
      `IMPORTANTE ANTES DE COMPRAR: este es un modelo 1:43 solo para colección, los controladores no están incluidos.`
    ],
    [
      6,
      "Gorra De Béisbol Cómoda",
      "Ropa",
      "93",
      `Nuestro producto adopta un diseño de hebilla ajustable, puede ajustar el tamaño usted mismo, fácil y conveniente de usar. Bienvenido a su compra. Gracias.
      `
    ],
    [
      7,
      "Tablet Samsung Galaxy Tab A A7",
      "Tecnologia",
      "2,899",
      `Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades.`
    ],
    [
      8,
      "Estufa empotrable Mabe Diseño XOC80800CT1 ",
      "Hogar",
      "15,198",
      `Mabe cuenta con más de 70 años de trayectoria en el mercado de electrodomésticos, dedicada a brindar a soluciones prácticas para el bienestar de los hogares.`
    ],
    [
      9,
      "Smart TV Hisense A4",
      "Tecnologia",
      "3,599",
      `Con el Smart TV 100012589 accederás a las aplicaciones donde se encuentran tus contenidos favoritos`
    ],
    [
      10,
      "Sierra Circular Eléctrica Pretul Sici-7-1/4p",
      "Herramientas",
      "1138",
      `La sierra Pretul SICI-7-1/4P es la solución para realizar cortes con precisión y velocidad.`
    ]
  ];
  // Obtiene la tabla principal
  var table = document.querySelector("table");

  // String para insertar en el cuerpo del html
  var contet = ''

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
