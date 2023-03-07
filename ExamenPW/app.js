function enviar(){
    //Obteniendo capos de entrada
    var form = document.forms["form-1"];

    var usuario = form["usuario"].value;
    var contrasehna = form["contrasehna"].value;

    var modal = document.querySelector('#modal__button');    

    if (usuario == "jperez" && contrasehna == "mipssw"){
        window.location.href = "bs1.html";
    }
    else{
        if (usuario == "vendedor" && contrasehna == "mipssw-vend"){
            window.location.href = "bs2.html";
        }else{
            var mensaje = document.querySelector('.modal-body');
            mensaje.innerHTML = "Usuario o contraseña incorrectas";
            modal.click();
        }
    }
}