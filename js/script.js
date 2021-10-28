/* 
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
} */
const divcodigo = document.getElementById("codigo");
const divcodigo2 = document.getElementById("codigo2");
const botonRechazar = document.getElementById("rechazar");
const botonAceptar = document.getElementById("aceptar");
const inputNombre = document.getElementById("inputNombre");
const inputMail = document.getElementById("inputMail");
const inputRN = document.getElementById("inputRN");
const label = document.getElementById("label");
const aceptarOferta = document.getElementById("aceptarOferta");
//Esta funcion pregunta al usuario si desea ingresar si nombre y mail.
preguntarDatos();
function preguntarDatos() {
    
    if (!localStorage.getItem('mail') && !localStorage.getItem('nombre')) {
        divcodigo2.style.display = "flex";
        divcodigo.innerText = "¿Desea ingresar su nombre y mail?";
        botonAceptar.style.display = "inline";
        botonRechazar.style.display = "inline";
        aceptarOferta.style.display = "none"
    }
}

//Esta funcion verifica la respuesta de usuario
function respuesta(siOno) {
    if (siOno === "si") {
        divcodigo.innerText = "Ingresa tu datos: "
        botonRechazar.style.display = "none";
        botonAceptar.innerText = "OK";
        inputMail.style.display = "block";
        inputNombre.style.display = "block";
        inputRN.style.display = "inline";
        label.style.display = "inline";
        inputRN.value
        /* nombre = prompt("Ingresa tu nombre: "); */
        var nombre = inputNombre.value;
        var mail = inputMail.value;
        if (mail.includes("@") && mail.includes(".")) {
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('mail', mail);
            var confirmar = inputRN.checked;
            if (confirmar) {
                localStorage.setItem('recibirNovedades', "si");
            } else {
                localStorage.setItem('recibirNovedades', "no");
            }
            cerrarPopUp();
        } else {
            inputMail.placeholder = "Ingrese un mail valido";
            inputMail.value = ""
        }
    } else if (siOno === "no") {
        cerrarPopUp();
        /* botonRechazar.style.display = "none";
        botonAceptar.style.display = "none"; */
    }
}

function cerrarPopUp() {
    divcodigo2.style.display = "none";
}