
function alCargar() {
    if (!localStorage.getItem('mail') && !localStorage.getItem('nombre')) {
        var verificacion = confirm("¿Desea ingresar su nombre y mail?");
        if (verificacion === true) {
            nombre = prompt("Ingresa tu nombre: ");
            var mailCorrecto = false;
            while (!mailCorrecto) {
                var mail = prompt("Ingresa tu mail: ");
                if (mail.includes("@") && mail.includes(".")) {
                    mailCorrecto = true;
                } else {
                    alert("Ingrese un mail valido.");
                }
            }
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('mail', mail);
        }
    }
    recibirNovedades();
}

function recibirNovedades() {
    if (localStorage.getItem('mail') && !localStorage.getItem('recibirNovedades')) {
        var confirmar = confirm("¿Desea recibir novedades por mail?");
        if (confirmar) {
            localStorage.setItem('recibirNovedades', "si");
        } else {
            localStorage.setItem('recibirNovedades', "no");
        }
    }
}