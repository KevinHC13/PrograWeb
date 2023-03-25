<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Formulario con base de datos, favor de llenar los campos</h1>
    <form action="insert.php" method="POST">
        <p><label for="nombre">Nombre: </label></p>
        <input type="text" id="first_name" name="first_name" placeholder="Nombre" required>
        
        <p><label for="apellido">Apellido: </label></p>
        <input type="text" name="last_name" id="last_name" placeholder="Apellido" required>

        <p><label for="genero">Genero: </label></p>
        <input type="text" name="genero" id="genero" placeholder="Genero" required>

        <p><label for="address">Direccion: </label></p>
        <input type="text" name="address" id="address" placeholder="Direccion" required>

        <p><label for="email">Email: </label></p>
        <input type="text" name="email" id="email" placeholder="Email" required>

        <input type="submit" value="Enviar">
    </form>
    
    
</body>
</html>