function saludo() {
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
saludo()