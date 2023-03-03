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
    "buttermilk pancakes",
    "breakfast",
    15.99,
    "./images/item-1.jpeg",
    `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  ],
  [
    2,
    "diner double",
    "lunch",
    13.99,
    "./images/item-2.jpeg",
    `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  ],
  [
    3,
    "godzilla milkshake",
    "shakes",
    6.99,
    "./images/item-3.jpeg",
    `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  ],
  [
    4,
    "country delight",
    "breakfast",
    20.99,
    "./images/item-4.jpeg",
    `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  ],
  [
    5,
    "egg attack",
    "lunch",
    22.99,
    "./images/item-5.jpeg",
    `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  ],
  [
    6,
    "oreo dream",
    "shakes",
    18.99,
    "./images/item-6.jpeg",
    `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  ],
  [
    7,
    "bacon overflow",
    "breakfast",
    8.99,
    "./images/item-7.jpeg",
    `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  ],
  [
    8,
    "american classic",
    "lunch",
    12.99,
    "./images/item-8.jpeg",
    `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  ],
  [
    9,
    "quarantine buddy",
    "shakes",
    16.99,
    "./images/item-9.jpeg",
    `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  ],
  [
    10,
    "bison steak",
    "dinner",
    22.99,
    "./images/item-10.jpeg",
    `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
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
