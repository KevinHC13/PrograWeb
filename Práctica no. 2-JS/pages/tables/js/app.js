function productos(){
  console.log("funciona");
  var productos = [["0000","Producto 1","Categoria 1","Precio 1", "Descripcion 1"],["0001","Producto 2","Categoria 2","Precio 2", "Descripcion 2"]]
  var table = document.querySelector("table");

  var contet = ''
  for (var i = 0; i < productos.length; i++){
    contet  = contet + '<tr class="item">';
    for (var j = 0; j < 5; j++){
      contet  = contet + "<td>" + productos[i][j] + "</td>";
    }
    contet  = contet +  '</tr>';
  }
  table.innerHTML = contet;
}
