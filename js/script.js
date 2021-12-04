const divcodigo = document.getElementById("codigo");
const divcodigo2 = document.getElementById("codigo2");
const botonRechazar = document.getElementById("rechazar");
const botonAceptar = document.getElementById("aceptar");
const inputNombre = document.getElementById("inputNombre");
const inputMail = document.getElementById("inputMail");
const inputRN = document.getElementById("inputRN");
const label = document.getElementById("label");
const aceptarOferta = document.getElementById("aceptarOferta");
var ingresoDatos;

var url = "https://demo2420474.mockable.io/userData";
var data = { token: "", name: "", email: "", sendEmail: "" };

let local = () => {
  if (localStorage.getItem("mail")) {
    data.name = localStorage.getItem("nombre");
    data.email = localStorage.getItem("mail");
    data.sendEmail = localStorage.getItem("ingresoDatos");
    // data.token = document.querySelector("#subject").value;
    // data.message = document.querySelector("#mensaje").value;
    // var contacto = new XMLHttpRequest();
    // contacto.open("POST", "https://demo2420474.mockable.io/submitForm"); //Le damos parametros: El primero es el método y el segundo es la URL a la que apuntamos
    // contacto.send(datos);
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
};

local();

//Esta funcion pregunta al usuario si desea ingresar su nombre y mail//
preguntarDatos();
function preguntarDatos() {
  if (
    !localStorage.getItem("mail") &&
    !localStorage.getItem("nombre") &&
    !localStorage.getItem("ingresoDatos")
  ) {
    divcodigo2.style.display = "flex";
    divcodigo.innerText = "¿Desea ingresar su nombre y mail?";
    botonAceptar.style.display = "inline";
    botonRechazar.style.display = "inline";
    aceptarOferta.style.display = "none";
  }
}

//Esta funcion verifica la respuesta de usuario//
function respuesta(siOno) {
  if (siOno === "si") {
    divcodigo.innerText = "Ingresá tus datos: ";
    botonRechazar.style.display = "none";
    botonAceptar.innerText = "OK";
    inputMail.style.display = "block";
    inputNombre.style.display = "block";
    inputRN.style.display = "inline";
    label.style.display = "inline";
    inputRN.value;
    var nombre = inputNombre.value;
    var mail = inputMail.value;
    if (mail.includes("@") && mail.includes(".")) {
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("mail", mail);
      var confirmar = inputRN.checked;
      if (confirmar) {
        localStorage.setItem("recibirNovedades", "si");
      } else {
        localStorage.setItem("recibirNovedades", "no");
      }
      cerrarPopUp();
    } else {
      inputMail.placeholder = "Ingrese un mail valido";
      inputMail.value = "";
    }
  } else if (siOno === "no") {
    ingresoDatos = false;
    localStorage.setItem("ingresoDatos", ingresoDatos);
    cerrarPopUp();
  }
}

//Esta funcion cierra el popup//
function cerrarPopUp() {
  divcodigo2.style.display = "none";
}
