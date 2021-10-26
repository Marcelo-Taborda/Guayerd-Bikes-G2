function ofertas() {
    if (localStorage.getItem("recibirNovedades")=== "si") {
        var verOferta = confirm("¿Desea ver la oferta personalizada?");
        if (verOferta) {
            window.location.replace("OfertasPersonalizadas.html");
        } 
    }
    
}
ofertas();