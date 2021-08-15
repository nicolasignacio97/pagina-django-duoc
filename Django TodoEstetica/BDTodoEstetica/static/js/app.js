$(document).ready(function() {

    $('#enviar').click(function() {


        var Nombre = $("#Nombre").val(),
            Apellido = $("#Apellido").val(),
            Direccion = $("#Direccion").val(),
            Correo = $("#Correo").val(),
            Contraseña1 = $("#Contraseña").val(),
            Contraseña2 = $("#ConfContra").val();

        if (Nombre == "") {

            $("#mensaje1").fadeIn();
            cambiaColor("#Nombre");
            return false;

        } else {
            $("#mensaje1").fadeOut();
            cambiaColorNormal("#Nombre");
        }
        if (Apellido == "") {
            $("#mensaje2").fadeIn();
            cambiaColor("#Apellido");
            return false;

        } else {
            $("#mensaje2").fadeOut();
            cambiaColorNormal("#Apellido");

        }

        if (Direccion == "") {
            $("#mensaje3").fadeIn();
            cambiaColor("#Direccion");
            return false;

        } else {
            $("#mensaje3").fadeOut();
            cambiaColorNormal("#Direccion");
        }
        if (Correo == "") {
            cambiaColor("#Correo");
            $("#mensaje4").fadeIn();
            $("#mensaje5").fadeOut();
            return false;
        } else {
            $("#mensaje4").fadeOut();
            cambiaColorNormal("#Correo");
        }

        if (Correo == null || Correo.length == 0 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Correo)) {
            cambiaColor("#Correo");
            $("#mensaje5").fadeIn();

        } else {
            $("#mensaje5").fadeOut();
            cambiaColorNormal("#Correo");
        }

        if (Contraseña1 == "") {
            cambiaColor("#Contraseña");
            $("#mensaje6").fadeIn();

            return false;

        } else {
            $("#mensaje6").fadeOut();
            cambiaColorNormal("#Contraseña");

        }

        if (Contraseña2 == "") {
            cambiaColor("#ConfContra");
            $("#mensaje8").fadeOut();
            $("#mensaje7").fadeIn();
            return false;


        } else {
            $("#mensaje7").fadeOut();
            cambiaColorNormal("#ConfContra");

        }

        if (Contraseña1 == Contraseña2) {
            $("#mensaje8").fadeOut();

        } else {
            $("#mensaje8").fadeIn();
            return false;
        }

    });

});

function cambiaColor(campo) {
    $(campo).css({
        border: "1px solid #dd5144"
    });
}

function cambiaColorNormal(campo) {
    $(campo).css({
        border: "1px solid #8C8C8C"
    });
}

function validarFormulario() {

    $('.alert').remove();

    //Declaracion de variables
    var nombre = $('#nombre').val(),
        correo = $('#mail').val(),
        celular = $('#celular').val(),
        mensaje = $('#mensaje').val(),
        tienda = $('#tienda').val(),
        rutTienda = $('#rutTienda').val();

    // validacion de nombre
    if (nombre == "" || nombre == null) {
        cambiarColor("nombre");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)) {
            cambiarColor("nombre");
            mostrarAlerta("No se permiten caracteres especiales o números");
            return false;
        }
    }
    // validacion de correo
    if (correo == "" || correo == null) {
        cambiarColor("correo");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(correo)) {
            cambiarColor("correo");
            mostrarAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

    //Validacion de telefono
    if (celular == "" || celular == null) {
        cambiarColor("celular");
        mostrarAlerta("CampoObligatorio");
        return false;
    } else {
        var expresion = /^(\+?56)?(\s?)(0?9)(\s?)[987654]\d{7}$/;
        if (!expresion.test(celular)) {
            cambiarColor("celular");
            mostrarAlerta("Por favor ingrese un número de celular válido");
            return false;
        }
    }

    //Validacion mensaje
    if (mensaje == "" || mensaje == null) {
        cambiarColor("mensaje");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(mensaje)) {
            cambiarColor("mensaje");
            mostrarAlerta("Por favor ingrese caracteres válidos");
            return false;
        }
    }

    //Validacion de la tienda
    if (tienda == "" || tienda == null) {
        cambiarColor("tienda");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(tienda)) {
            cambiarColor("tienda");
            mostrarAlerta("No se permiten caracteres especiales o números");
            return false;
        }
    }

    //Validacion de rut tienda
    if (rutTienda == "" || rutTienda == null) {
        cambiarColor("rutTienda");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
        if (!expresion.test(rutTienda)) {
            cambiarColor("rutTienda");
            mostrarAlerta("Por favor, Debe ingresar un rut válido");
            return false;
        }
    }

    return true;
}

$('input').focus(function() {
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('celular');
    colorDefault('tienda');
    colorDefault('rutTienda');
});

$('textarea').focus(function() {
    $('.alert').remove();
    colorDefault('mensaje');
});
//Función color por defecto
function colorDefault(dato) {
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

function cambiarColor(dato) {
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

function mostrarAlerta(texto) {
    $("#nombre").before('<div class="alert">Error, ' + texto + '</div>');
}


function nuevaventana(URL) {
    window.open(URL, "ventana1", "width=600,height=600,scrollbars=NO")
}