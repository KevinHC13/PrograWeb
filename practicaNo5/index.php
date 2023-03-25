<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
            <!--=====================================================================-->
            <!-- general form elements disabled -->
            <div class="card card-warning" style="width: 100%;">
              <div class="card-header">
                <h3 class="card-title">Registro de productos</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <form action="insert.php" method="POST" id="form-1">
                  <div class="row">
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <!--Usuario-->
                        <label for="codigo">Ingresa el código:(*)</label>
                        <input type="text" class="form-control" id="codigo" name="codigo" placeholder="Proporciona el código">

                        <!--Nombre-->
                        <label for="nombre">Ingresa el nombre:(*)</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Proporciona el nombre">

                        <!--Apellido-->
                        <div class="form-group">
                        <label>Categoria</label>
                        <select id="categoria" class="form-control">
                          <option>Hogar</option>
                          <option>Tecnologia</option>
                          <option>Ropa</option>
                          <option>Zapatos</option>
                          <option>Limpieza</option>
                        </select>
                        </div>

                      </div>
                        <!--Email-->
                        <label for="precio_venta">Ingresa el precio  de venta:(*)</label>
                        <input type="text" class="form-control" id="precio_venta" name="precio_venta" placeholder="Proporciona el precio de venta">

                        <!--Contraseña-->
                        <label for="precio_compra">Ingresa el precio de compra:(*)</label>
                        <input type="text" class="form-control" id="precio_compra" name="precio_compra" placeholder="Proporciona el precio de compra">

                      </div>
                    

                  <div class="row">
                    <div class="col-sm-6">
                      <!-- checkbox -->
                      <div class="form-group">
                        <div class="form-check">
                          

                        </div>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="card-footer">
                    <input type="submit" value="Enviar" class="btn btn-primary">

                    <button type="reset" name= "botonR" class="btn btn-primary">Cancelar</button>
                    

                  </div>
                
                </form>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
    
    
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>