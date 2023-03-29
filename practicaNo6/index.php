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
		$categorias=categorias();
		include("php/aside.php")
		?>
        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5 pt-5">
        <h2 class="mb-4">Añadir productos</h2>
		<form id="formulario" action="php/reg_producto.php" method="post" class="needs-validation" novalidate>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputuser">Ingresar código (*)</label>
                                <input required type="text" class="form-control" id="codigo" name="codigo" placeholder="Ingresa el código del producto"  >
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresar nombre (*)</label>
                                <input required type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa el nombre del producto">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Descripción</label>
                        <input required type="text" class="form-control" id="descripcion" name="descripcion" placeholder="Ingresa descripcion del producto">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Ingresar categoria (*)</label>
                        <select id="inputState" class="form-control select2 " name="id_categoria" required>
                        <?php if($categorias == NULL){ ?>    
                            <option value=" ">Sin categorias</option>
                        <?php }else{ ?>
                            <option value="">Seleccione una categoria</option>
                        <?php foreach( $categorias as $datos => $data ){ ?>
                            <option  value="<?php echo $data['id'] ?>"><?php echo $data['nombre'] ?></option>
                        <?php }
                        }
                        ?>    
                        </select>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresar precio de venta (*)</label>
                                <input required type="number" class="form-control" id="precioVenta" name="precioVenta" placeholder="Ingresa precio de venta del producto"  >
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresar precio de compra (*)</label>
                                <input required type="number" class="form-control" id="precioCompra" name="precioCompra" placeholder="Ingresa precio de compra del producto"  >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </form>
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