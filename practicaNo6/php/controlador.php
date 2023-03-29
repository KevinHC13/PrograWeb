<?php
include("conn.php");
//Funcion para obtener las categorias dentro de la base de datos
function categorias(){
    global $pdo;
    $sql = "SELECT * FROM categorias";
    
    $statement = $pdo->prepare($sql);

    $statement->execute();
    $results=$statement->fetchAll();
    return $results;
}
//Funcion para obtener los productos dentro de la base de datos

function productos(){
    global $pdo;
    $sql = "SELECT productos.codigo, productos.nombre, productos.descripcion, productos.precio_venta, productos.precio_compra, categorias.nombre as nombre_categoria FROM productos INNER JOIN categorias ON productos.id_categoria=categorias.id;
    ";
    $statement = $pdo->prepare($sql);

    $statement->execute();
    $results=$statement->fetchAll();
    return $results;
}
?>