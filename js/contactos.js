let hotsale = [5, 10, 15, 20, 25];
let aleatorio = Math.floor(Math.random() * 4) + 0;
// const divcodigo = document.getElementById("codigo");
function codigo() {
  const divcodigo = document.getElementById("codigo");
  const divcodigo2 = document.getElementById("codigo2");
  if (localStorage.getItem("nombre")) {
    divcodigo2.style.display = "flex";
    console.log(divcodigo);
    divcodigo.innerText =
      "Estimado " +
      localStorage.getItem("nombre") +
      ", ¡gracias por elegirnos! Le obsequiamos el codigo de " +
      `${hotsale[aleatorio]}HOTSALE para obtener un ${hotsale[aleatorio]}% de descuento` +
      " con su compra";
    setTimeout(() => {
      divcodigo2.style.display = "none";
    }, 15000);
  }
}
codigo();