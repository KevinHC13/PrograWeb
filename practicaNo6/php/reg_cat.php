<?php
    include("conn.php");
    global $pdo;
    $codigo=$_REQUEST['codigo'];
    $nombre=$_REQUEST['nombre'];
	$sql = "INSERT INTO categorias(codigo,nombre) VALUES('$codigo','$nombre')";
	$statement = $pdo->prepare($sql);
	$statement->execute();
    header("location: ../list_categoria.php");

	return $statement;
?>