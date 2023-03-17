//Establecimineto de modo estricto de JS
'use strict'

//Declaración de variables para las validaciones y colocación de elementos
const forms = document.querySelectorAll('.needs-validation');
const formulario = document.querySelector('#formulario');
//const form = document.forms['formulario'];

const loaderBtn = document.getElementById("loader-btn");
const loaderOverlay = document.getElementById("loader-overlay");

loaderBtn.addEventListener("click", function() {
  loaderOverlay.classList.remove("d-none");
  
  setTimeout(function() {
    loaderOverlay.classList.add("d-none");
  }, 3000);
});


//Inicialización de alertas 
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
        //Se colocan los valores en el modal
        event.preventDefault();
        const datos = new FormData(formulario);
        //var arrayForm = []
        //datos.forEach(function(value,key){
        //    arrayForm.push({'campo':key,'valor':value});
        //});
        // Enviar los datos a la página de destino mediante una solicitud POST


		    fetch("formatoEmpleo.html", {
		    		method: "POST",
		    		body: datos
		    })
		    .then(response => {
                Toast.fire({
                    icon: 'success',
                    title: 'Correcto'
                  });
                
		    })
		    .catch(error => {
                Toast.fire({
                    icon: 'error',
                    title: 'Error'
                  })
		    });


    }
    form.classList.add('was-validated')
  }, false)
})
