//Esta funcion muestra el PopUp
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

//Esta funcion nos dirige a la pagina "OfertasPersonalizadas.html"
function ofertaPersonalizada() {
    window.location.replace("OfertasPersonalizadas.html");
}

//Funcion Vieja
/* function saludo() {
    if (localStorage.getItem('nombre')) {
        const fecha = new Date();
        const hora = fecha.getHours();
        console.log(hora)
        if (hora >= 0 && hora < 6) {
            alert("Buenas madrugadas, " + localStorage.getItem('nombre'));
        } else if (hora >= 6 && hora < 12) {
            alert("Buen dia, " + localStorage.getItem('nombre'));
        } else if (hora >= 12 && hora < 19) {
            alert("Buenas tardes, " + localStorage.getItem('nombre'));
        } else {
            alert("Buenas noches, " + localStorage.getItem('nombre'));
        }
    }
}
saludo() */
