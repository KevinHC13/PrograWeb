<?php
    include("conn.php");
    global $pdo;
    $codigo=$_REQUEST['codigo'];
    $nombre=$_REQUEST['nombre'];
    $descripcion=$_REQUEST['descripcion'];
    $id_categoria=$_REQUEST['id_categoria'];
    $precioVenta=$_REQUEST['precioVenta'];
    $precioCompra=$_REQUEST['precioCompra'];
	$sql = "INSERT INTO productos(codigo,nombre,descripcion,precio_venta,precio_compra,id_categoria) VALUES('$codigo','$nombre','$descripcion','$precioVenta','$precioCompra','$id_categoria')";
	$statement = $pdo->prepare($sql);
	$statement->execute();
    header("location: ../list_producto.php");

?>