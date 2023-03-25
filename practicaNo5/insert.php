<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar datos a la DB</title>
</head>
<body>
    <center>
        <?php
        // Conexion a la base de datos
        $con=mysqli_connect("localhost","root","root", "practicasPrograWeb");

        //Revisar conexion
        if($con == false){
            die("Error, no hay conexion a la base de datos".mysqli_connect_error());
        }

        // Tomar los 5 valores del formulario a travez de los datos de los campos
        $codigo=$_REQUEST['codigo'];
        $nombre=$_REQUEST['nombre'];
        $precio_venta=$_REQUEST['precio_venta'];
        $precio_compra=$_REQUEST['precio_compra'];
        //$email=$_REQUEST['email'];
        var_dump($codigo);

        // Ejecutar el Query de insercion de datos
        $sql = "INSERT INTO practica5 VALUES ('$codigo','$nombre','$precio_venta','$precio_compra')";

        // Mandar mensaje de datos guardados
        if (mysqli_query($con,$sql)){
            echo "<h3>Datos almacenados correctamente. Revisar MYSQL para cotejar registro y actualizar de ser necesario</h3>";
            //nl2br - Inserta saltos de linea HTML antes de todos los nuevos string
            echo nl2br ("\n$first_name \n$last_name \n$genero \n$address \n$email");
        }else{
            echo "ERROR! $sql.".mysqli_error($con);
        }

        // Cerrar conexion
        mysqli_close($con);
        ?>
        
    </center>
</body>
</html>