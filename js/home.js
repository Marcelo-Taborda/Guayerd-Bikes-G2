// Necesitamos que el banner de la página principal se obtenga de un servidor de manera de el equipo de Marketing pueda cambiarlo on-demand.
//Esta funcion muestra el PopUp que saluda segun la hora//

// Banner del servidor
let banner = "http://demo2420474.mockable.io/getHomeBanner";
let call = fetch(banner);
call
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.querySelector(".cybermonday").src = data.imgUrl;
  })
  .catch((error) => console.log(error));

// codigo();
// function codigo() {
//   if (localStorage.getItem("nombre")) {
//     aceptarOferta.style.display = "none";
//     botonAceptar.style.display = "none";
//     botonRechazar.style.display = "none";
//     const divcodigo = document.getElementById("codigo");
//     const divcodigo2 = document.getElementById("codigo2");
//     divcodigo2.style.display = "flex";
//     const fecha = new Date();
//     const hora = fecha.getHours();
//     console.log(hora);
//     if (hora >= 0 && hora < 6) {
//       divcodigo.innerText =
//         "Buenas madrugadas, " + localStorage.getItem("nombre");
//     } else if (hora >= 6 && hora < 12) {
//       divcodigo.innerText = "Buen dia, " + localStorage.getItem("nombre");
//     } else if (hora >= 12 && hora < 19) {
//       divcodigo.innerText = "Buenas tardes, " + localStorage.getItem("nombre");
//     } else {
//       divcodigo.innerText = "Buenas noches, " + localStorage.getItem("nombre");
//     }
//   }
// }

// //Esta funcion permite cerrar el PopUp
// function cerrarPopup() {
//   const divcodigo2 = document.getElementById("codigo2");
//   divcodigo2.style.display = "none";
// }
