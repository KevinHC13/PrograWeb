<!doctype html>
<html lang="en">
  <head>
  	<title>Añadir Productos</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="css/style.css">
  </head>
  <body>
		<?php 
		include("php/controlador.php");
		$productos=productos();
    include("php/aside.php")
		?>
        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5 pt-5">
        <h2 class="mb-4">Listado de productos</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Categoría</th>
              <th scope="col">Precio Venta</th>
              <th scope="col">Precio Compra</th>
            </tr>
          </thead>
          <tbody>
              <?php foreach($productos as $datos => $data){
               ?>
            <tr>
              <th scope="row"><?php echo $data['codigo']; ?></th>
              <td><?php echo $data['nombre']; ?></td>
              <td><?php echo $data['descripcion']; ?></td>
              <td><?php echo $data['nombre_categoria']; ?></td>
              <td><?php echo $data['precio_venta']; ?></td>
              <td><?php echo $data['precio_compra']; ?></td>
            </tr>
            <?php } ?> 
          </tbody>
        </table>
      </div>
		</div>
        <script src="sources/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="sources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- jquery-validation -->
    <script src="sources/plugins/jquery-validation/jquery.validate.min.js"></script>
    <script src="sources/plugins/jquery-validation/additional-methods.min.js"></script>
    <!-- SweetAlert2 -->
    <script src="sources/plugins/sweetalert2/sweetalert2.min.js"></script>
    <script src="sources/dist/js/adminlte.min.js"></script>

    <script src="js/app.js"></script>
  </body>
</html>