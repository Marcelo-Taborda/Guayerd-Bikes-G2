let cupon = "https://demo2420474.mockable.io/getCoupon";
let call2 = fetch(cupon);
call2;
// .then((res) => {
//   return res.json();
// })
// .then((data) => {
//   console.log(`Cupón de ${data.discountPercentage}`);
//   divcodigo.innerText = `Cupón de ${data.discountPercentage}`;
// })
// .catch((error) => console.log(error));

let hotsale = [5, 10, 15, 20, 25];
let aleatorio = Math.floor(Math.random() * 4) + 0;
const botones = document.getElementById("botones");
const inputsCont = document.getElementsByClassName("cont2");

// Esta funcion abre el popup de codigo de descuento//
codigo();
function codigo() {
  const divcodigo = document.getElementById("codigo");
  const divcodigo2 = document.getElementById("codigo2");
  if (localStorage.getItem("nombre")) {
    aceptarOferta.style.display = "none";
    divcodigo2.style.display = "flex";
    console.log(divcodigo);
    call2
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        divcodigo.innerText = `Cupón de ${data.discountPercentage}`;
      })
      .catch((error) => console.log(error));

    // divcodigo.innerText =
    //   "Estimado/a " +
    //   localStorage.getItem("nombre") +
    //   ", ¡gracias por elegirnos! Le obsequiamos el codigo de " +
    //   `${hotsale[aleatorio]}HOTSALE para obtener un ${hotsale[aleatorio]}% de descuento` +
    //   " con su compra";
    setTimeout(() => {
      divcodigo2.style.display = "none";
    }, 15000);
    botones.style.display = "none";
    inputsCont[0].value = localStorage.getItem("nombre");
    inputsCont[1].value = localStorage.getItem("mail");
  }
}

// Esta funcion cierra el popup//
function cerrarPopup() {
  const divcodigo2 = document.getElementById("codigo2");
  divcodigo2.style.display = "none";
}
