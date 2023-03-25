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
        $first_name=$_REQUEST['first_name'];
        $last_name=$_REQUEST['last_name'];
        $genero=$_REQUEST['genero'];
        $address=$_REQUEST['address'];
        $email=$_REQUEST['email'];
        var_dump($first_name);

        // Ejecutar el Query de insercion de datos
        $sql = "INSERT INTO college VALUES ('$first_name','$last_name','$genero','$address','$email')";

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