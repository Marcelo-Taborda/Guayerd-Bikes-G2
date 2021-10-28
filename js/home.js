//Esta funcion muestra el PopUp que saluda segun la hora//
codigo();
function codigo() {
    if (localStorage.getItem('nombre')) {
        botonAceptar.style.display = "none";
        botonRechazar.style.display = "none";
        const divcodigo = document.getElementById("codigo");
        const divcodigo2 = document.getElementById("codigo2");
        divcodigo2.style.display = "flex";
        const fecha = new Date();
        const hora = fecha.getHours();
        console.log(hora)
        if (hora >= 0 && hora < 6) {
            divcodigo.innerText = "Buenas madrugadas, " + localStorage.getItem('nombre');
        } else if (hora >= 6 && hora < 12) {
            divcodigo.innerText = "Buen dia, " + localStorage.getItem('nombre');
        } else if (hora >= 12 && hora < 19) {
            divcodigo.innerText = "Buenas tardes, " + localStorage.getItem('nombre');
        } else {
            divcodigo.innerText = "Buenas noches, " + localStorage.getItem('nombre');
        }
    }
}

//Esta funcion permite cerrar el PopUp
function cerrarPopup() {
    const divcodigo2 = document.getElementById("codigo2");
    divcodigo2.style.display = "none";
}