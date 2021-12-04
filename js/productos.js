let bicis = "https://demo2420474.mockable.io/productList";
let call3 = fetch(bicis);
call3
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((e) => {
      let preciod = () => {
        if (e.discountPrice) {
          return `<li>Precio de descuento : ${e.discountPrice}</li>`;
        }
        return "";
      };
      let precio = () => {
        if (!e.discountPrice) {
          return e.price;
        } else {
          return `<span id="tachado">${e.price}</span>`;
        }
      };

      document.querySelector(
        "#nuevabici"
      ).innerHTML += `      <div class="articulo">
    <div class="imagenProducto">
      <a href="${e.imgUrl}"
        ><img src="${e.imgUrl}" alt=""
      /></a>
    </div>
    <div class="descripcionProducto">
      <h2><a href="${e.imgUrl}">${e.title}</a></h2>
      <p>${e.description}</p>
      <ul>
        <li>Disponibilidad : ${e.inStock} Unidades</li>
        <li>Precio : ${precio()}</li>
        <li>Moneda ${e.currency}</li>
        ${preciod()}
      </ul>
    </div>
`;
    });
  })
  .catch((error) => console.log(error));

const botones = document.getElementById("botones");
//Esta funcion muestra el PopUp de oferta personalizada//
codigo();
function codigo() {
  if (
    localStorage.getItem("recibirNovedades") === "si" &&
    localStorage.getItem("recibirNovedades")
  ) {
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
