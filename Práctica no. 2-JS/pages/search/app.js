class Producto{
  constructor(id,title,category,price,img,desc){
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.img = img;
    this.desc = desc;
  }
}

class Menu {
  constructor(){
    this.productos = [];
  }

  add_producto(producto){
    this.productos.push(producto);
  }
}


const menu = new Menu();


const lista_productos = [
  [
    1,
    "Botín Flexi Para Mujer",
    "Ropa",
    "1,249",
    "https://http2.mlstatic.com/D_NQ_NP_913431-MLM50678435390_072022-O.webp",
    `Este producto forma parte de nuestra línea de dama semivestir con inspiración western.`
  ],
  [
    2,
    "Laptop Gateway 15.6 4gb",
    "Tecnologia",
    "4,829",
    "https://http2.mlstatic.com/D_NQ_NP_2X_609550-MLM52928026462_122022-F.webp",
    `La laptop Gateway Notebook Ultra Slim GWNC31514-BK es una solución tanto para trabajar y estudiar como para entretenerte.`
  ],
  [
    3,
    "Sala Económica Esquinera",
    "Hogar",
    "5,960",
    "https://http2.mlstatic.com/D_NQ_NP_2X_964666-MLM53765389390_022023-F.webp",
    `La mejor opción para tu primera sala fabricada con materiales básicos asequible al bolsillo.`
  ],
  [
    4,
    "Taladro percutor inalámbrico de 10mm 21V",
    "Herramientas",
    "681",
    "https://imgs.search.brave.com/_u1Fj3qWIv8URpCQ2WkKfH1lMcdmRE_tcBDPlli_mew/rs:fit:1200:722:1/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vdGFsYWRyby1w/ZXJjdXRvci1kZXdh/bHQtZGNrMjkwbDIt/aW5hbGFtYnJpY28t/ZGVzdG9ybmlsbGFk/b3ItRF9OUV9OUF84/NzE1MTEtTUNPMjA1/Njg4MjQyODFfMDEy/MDE2LUYuanBn",
    `Con el taladro eléctrico Teeno 5816-1 podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.`
  ],
  [
    5,
    "Burago Redbull F1 Rb18",
    "Jugetes",
    "298",
    "https://http2.mlstatic.com/D_NQ_NP_2X_727341-MLM53555609550_022023-F.webp",
    `IMPORTANTE ANTES DE COMPRAR: este es un modelo 1:43 solo para colección, los controladores no están incluidos.`
  ],
  [
    6,
    "Gorra De Béisbol Cómoda",
    "Ropa",
    "93",
    "https://http2.mlstatic.com/D_NQ_NP_2X_816232-MLM50793992209_072022-F.webp",
    `Nuestro producto adopta un diseño de hebilla ajustable, puede ajustar el tamaño usted mismo, fácil y conveniente de usar. Bienvenido a su compra. Gracias.
    `
  ],
  [
    7,
    "Tablet Samsung Galaxy Tab A A7",
    "Tecnologia",
    "2,899",
    "https://http2.mlstatic.com/D_NQ_NP_2X_783986-MLA47146625905_082021-F.webp",
    `Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades.`
  ],
  [
    8,
    "Estufa empotrable Mabe Diseño XOC80800CT1 ",
    "Hogar",
    "15,198",
    "https://http2.mlstatic.com/D_NQ_NP_2X_609190-MLA45003012503_022021-F.webp",
    `Mabe cuenta con más de 70 años de trayectoria en el mercado de electrodomésticos, dedicada a brindar a soluciones prácticas para el bienestar de los hogares.`
  ],
  [
    9,
    "Smart TV Hisense A4",
    "Tecnologia",
    "3,599",
    "https://http2.mlstatic.com/D_NQ_NP_2X_869347-MLA44226115511_122020-F.webp",
    `Con el Smart TV 100012589 accederás a las aplicaciones donde se encuentran tus contenidos favoritos`
  ],
  [
    10,
    "Sierra Circular Eléctrica Pretul Sici-7-1/4p",
    "Herramientas",
    "1138",
    "https://http2.mlstatic.com/D_NQ_NP_2X_960254-MLM51864843020_102022-F.webp",
    `La sierra Pretul SICI-7-1/4P es la solución para realizar cortes con precisión y velocidad.`
  ]
];

for (let i = 0; i < lista_productos.length; i++){
  menu.add_producto(new Producto(lista_productos[i][0],lista_productos[i][1],lista_productos[i][2],lista_productos[i][3],lista_productos[i][4],lista_productos[i][5]));
}


// Obtener elemento principal
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


// mostrar todos los productos al cargar la página
//NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
window.addEventListener("DOMContentLoaded", function () {
  display_menu(menu);
  display_buttons();
});

function display_menu(menu){
  let html_menu = '';
  for (let i = 0; i < menu.productos.length; i++){
    html_menu = html_menu + `<article class="menu-item">
      <img src=${menu.productos[i].img} alt=${menu.productos[i].title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${menu.productos[i].title}</h4>
          <h4 class="price">$${menu.productos[i].price}</h4}
        </header>
        <p class="item-text">
          ${menu.productos[i].desc}
        </p>
      </div>
    </article>`;
  }
  sectionCenter.innerHTML = html_menu;

}


function display_buttons(){
  var categorias = ["all"];
  for (let i = 0; i < menu.productos.length; i++){
    if (categorias.indexOf(menu.productos[i].category)  == -1){
      categorias.push(menu.productos[i].category);
    }
  }
  html_buttons = '';
  for (let i = 0; i < categorias.length; i++){
    html_buttons = html_buttons + `
    <button type="button" class="filter-btn" data-id=${categorias[i]}>
      ${categorias[i]}
    </button>
      `; 
  }
  btnContainer.innerHTML = html_buttons;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = new Menu();
      menuCategory.productos =  menu.productos.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        display_menu(menu);
      } else {
        display_menu(menuCategory);
      }
    });
  });
}
