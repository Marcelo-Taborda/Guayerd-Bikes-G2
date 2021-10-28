const botones = document.getElementById("botones");
//Esta funcion muestra el PopUp de oferta personalizada//
codigo();
function codigo() {
    if (localStorage.getItem("recibirNovedades") === "si" && localStorage.getItem("recibirNovedades")) {
        const divcodigo = document.getElementById("codigo");
        const divcodigo2 = document.getElementById("codigo2");
        divcodigo2.style.display = "flex";
        divcodigo.innerText = "¿Desea ver la oferta personalizada?";
        botones.style.display = "none";
    }
}

//Esta funcion permite cerrar el PopUp//
function cerrarPopup() {
    const divcodigo2 = document.getElementById("codigo2");
    divcodigo2.style.display = "none";
}

//Esta funcion nos dirige a la pagina "OfertasPersonalizadas.html"//
function ofertaPersonalizada() {
    window.location.replace("OfertasPersonalizadas.html");
}