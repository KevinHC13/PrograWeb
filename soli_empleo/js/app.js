function generarForm() {
    // Obtener los datos del formulario
    const forms = document.querySelectorAll('.needs-validation');
    const loaderOverlay = document.getElementById("loader-overlay");    //Inicialización de alertas 
    
    const formulario = document.getElementById('formulario');
    const inputs = formulario.querySelectorAll('input');

    const selects = formulario.querySelectorAll('select');

    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    });

    // Validación del formulario Clientes
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        
        
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            Toast.fire({
              icon: 'error',
              title: 'Datos incompletos'
            })
        
          }else{
            event.preventDefault()
            loaderOverlay.classList.remove("d-none");
            
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].setAttribute('readonly', true);
            }

            for (let i = 0; i < selects.length; i++) {
                selects[i].setAttribute('disabled', "disabled");
            }

            setTimeout(function() {
              loaderOverlay.classList.add("d-none");
            }, 3000);

            
            const loaderJS = document.getElementById("btnJson");
            loaderJS.style.display = "inline-block";

            const loaderBtn = document.getElementById("loader-btn");
            loaderBtn.style.display = "none";

            }
        form.classList.add('was-validated')
        }, false)
    })
}   

function downloadJSON(){
    console.log("Descargando JSON");
    const form = document.forms['formulario'];
    let values = [form["puesto_solicitado"].value,
    form["fecha"].value,form["nombre"].value,
    form["apellido_p"].value,form["apellido_m"].value, 
    form["edad"].value, form["sexo"].value, form["telefono"].value,
    form["domicilio"].value, form["colonia"].value, form["cp"].value,
    form["ciudad"].value, form["entidad_f"].value, form["vivienda"].value,
    form["nacionalidad"].value, form["fecha_nacimiento"].value, 
    form["estado_civil"].value, form["dependencias"].value, form["curp"].value, 
    form["afore"].value, form["rfc"].value, form["lic_manejo"].value, 
    form["cart_militar"].value, form["pasaporte"].value, form["nss"].value, 
    form["clase"].value, form["nombre_padre"].value, form["domicilio_padre"].value, 
    form["ocupacion_padre"].value, form["nombre_madre"].value, 
    form["domicilio_madre"].value, form["ocupacion_madre"].value, 
    form["nombre_esposa"].value, form["domicilio_esposa"].value, 
    form["ocupacion_esposa"].value, form["nivel_estudios"].value, 
    form["institucion"].value, form["carrera"].value, form["fecha_inicio_estudios"].value, 
    form["fecha_fin_estudios"].value, form["puesto1"].value, form["empresa1"].value, 
    form["fecha_inicio1"].value, form["fecha_fin1"].value, form["salario1"].value, 
    form["puesto2"].value, form["empresa2"].value, form["fecha_inicio2"].value, 
    form["fecha_fin2"].value, form["salario2"].value, form["nombre_referencia1"].value, 
    form["telefono_referencia1"].value, form["relacion_referencia1"].value, 
    form["nombre_referencia2"].value, form["telefono_referencia2"].value, 
    form["relacion_referencia2"].value];



    // Crear objeto con los datos del formulario
    var formData = {
    puesto_solicitado: values[0],
    fecha: values[1],
    nombre: values[2],
    apellido_p: values[3],
    apellido_m: values[4],
    edad: values[5],
    sexo: values[6],
    telefono: values[7],
    domicilio: values[8],
    domicilio: values[9],
    colonia: values[10],
    cp: values[11],
    ciudad: values[12],
    entidad_f: values[13],
    vivienda: values[14],
    nacionalidad: values[15],
    fecha_nacimiento: values[16],
    estado_civil: values[17],
    dependencias: values[18],
    curp: values[19],
    afore: values[20],
    rfc: values[21],
    lic_manejo: values[22],
    cart_militar: values[23],
    pasaporte: values[24], nss: values[25], clase: values[26], nombre_padre: values[27], domicilio_padre: values[28], ocupacion_padre: values[29], nombre_madre: values[30], domicilio_madre: values[31], ocupacion_madre: values[32], nombre_esposa: values[33], domicilio_esposa: values[34], ocupacion_esposa: values[35], nivel_estudios: values[36], institucion: values[37], carrera: values[38], fecha_inicio_estudios: values[39], fecha_fin_estudios: values[40], puesto1: values[41], empresa1: values[42], fecha_inicio1: values[43], fecha_fin1: values[44], salario1: values[45], puesto2: values[46], empresa2: values[47], fecha_inicio2: values[48], fecha_fin2: values[49], salario2: values[50], nombre_referencia1: values[51], telefono_referencia1: values[52], relacion_referencia1: values[53], nombre_referencia2: values[54], telefono_referencia2: values[55], relacion_referencia2: values[56]
    };

    // Convertir objeto a JSON
    var jsonData = JSON.stringify(formData);

    // Crear elemento <a> para descargar el archivo
    var downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(jsonData));
    downloadLink.setAttribute("download", "solicitud-empleo.json");

    // Simular clic en el enlace de descarga
    downloadLink.click();
}


function cancelar(){
    location.href='empleo.html'
}