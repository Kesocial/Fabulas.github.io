var Puntuaciones = document.getElementById("Puntuaciones");
var puntuacionbtn1 = document.getElementById("puntuacionbtn1");
var puntuacionbtn2 = document.getElementById("puntuacionbtn2");
var enviar1 = document.getElementById("enviar1");
var enviar2 = document.getElementById("enviar2");
var enviar3 = document.getElementById("enviar3");
var enviar4 = document.getElementById("enviar4");
var enviar5 = document.getElementById("enviar5");

var siguiente1 = document.getElementById("siguiente1");
var siguiente2 = document.getElementById("siguiente2");
var siguiente3 = document.getElementById("siguiente3");
var siguiente4 = document.getElementById("siguiente4");
var siguiente5 = document.getElementById("siguiente5");

var pregunta1 = document.getElementById("pregunta1");
var pregunta2 = document.getElementById("pregunta2");
var pregunta3 = document.getElementById("pregunta3");
var pregunta4 = document.getElementById("pregunta4");
var pregunta5 = document.getElementById("pregunta5");

var modalExplicacion1 = document.getElementById("modalExplicacion1");
var modalExplicacion2 = document.getElementById("modalExplicacion2");
var modalExplicacion3 = document.getElementById("modalExplicacion3");
var modalExplicacion4 = document.getElementById("modalExplicacion4");
var modalExplicacion5 = document.getElementById("modalExplicacion5");

var respuestaCorrecta1 = document.getElementById("respuesta-correcta1");
var respuestaCorrecta2 = document.getElementById("respuesta-correcta2");
var respuestaCorrecta3 = document.getElementById("respuesta-correcta3");
var respuestaCorrecta4 = document.getElementById("respuesta-correcta4");
var respuestaCorrecta5 = document.getElementById("respuesta-correcta5");

var resp1 = document.getElementById("resp1");
var resp2 = document.getElementById("resp2");
var resp3 = document.getElementById("resp3");

var resp1_2 = document.getElementById("resp1_2");
var resp2_2 = document.getElementById("resp2_2");
var resp3_2 = document.getElementById("resp3_2");
var resp4_2 = document.getElementById("resp4_2");

var resp1_3 = document.getElementById("resp1_3");
var resp2_3 = document.getElementById("resp2_3");
var resp3_3 = document.getElementById("resp3_3");
var resp4_3 = document.getElementById("resp4_3");

var resp1_4 = document.getElementById("resp1_4");
var resp2_4 = document.getElementById("resp2_4");
var resp3_4 = document.getElementById("resp3_4");

var resp1_5 = document.getElementById("resp1_5");
var resp2_5 = document.getElementById("resp2_5");
var resp3_5 = document.getElementById("resp3_5");

var resp3_5 = document.getElementById("resp3_5");

var contador = 0;
var porcentaje = 0;

var pregLibre1 = document.getElementById("pregLibre1");
var respLibre1 = document.getElementById("respLibre1");
var enviarRespLibre1 = document.getElementById("enviarRespLibre1");

var modalExplicacion6 = document.getElementById("modalExplicacion6");
var siguiente6 = document.getElementById("siguiente6");

var TituloMultipleChoise = document.getElementById("TituloMultipleChoise");

enviar1.onclick = function() {
    modalExplicacion1.classList.remove("display-none");
    siguiente1.classList.remove("display-none");
    enviar1.disabled = true;
    resp1.classList.add("blockear");
    resp2.classList.add("blockear");
    resp3.classList.add("blockear");
    resp1.disabled = true;
    resp2.disabled = true;
    resp3.disabled = true;
    respuestaCorrecta1.classList.add("respuesta-correcta");
    if (resp3.checked) {
        contador++;
    }
};
siguiente1.onclick = function() {
    pregunta2.classList.remove("display-none");
    pregunta1.classList.add("display-none");
};

enviar2.onclick = function() {
    modalExplicacion2.classList.remove("display-none");
    siguiente2.classList.remove("display-none");
    enviar2.disabled = true;
    resp1_2.disabled = true;
    resp2_2.disabled = true;
    resp3_2.disabled = true;
    resp4_2.disabled = true;
    respuestaCorrecta2.classList.add("respuesta-correcta");
    if (resp4_2.checked) {
        contador++;
    }
};
siguiente2.onclick = function() {
    pregunta3.classList.remove("display-none");
    pregunta2.classList.add("display-none");
};

enviar3.onclick = function() {
    modalExplicacion3.classList.remove("display-none");
    siguiente3.classList.remove("display-none");
    enviar3.disabled = true;
    resp1_3.disabled = true;
    resp2_3.disabled = true;
    resp3_3.disabled = true;
    resp4_3.disabled = true;
    respuestaCorrecta3.classList.add("respuesta-correcta");
    if (resp1_3.checked) {
        contador++;
    }
};
siguiente3.onclick = function() {
    pregunta4.classList.remove("display-none");
    pregunta3.classList.add("display-none");
};

enviar4.onclick = function() {
    siguiente4.classList.remove("display-none");
    enviar4.disabled = true;
    resp1_4.disabled = true;
    resp2_4.disabled = true;
    resp3_4.disabled = true;
    respuestaCorrecta4.classList.add("respuesta-correcta");
    if (resp2_4.checked) {
        contador++;
    }
};
siguiente4.onclick = function() {
    pregunta5.classList.remove("display-none");
    pregunta4.classList.add("display-none");
};

enviar5.onclick = function() {
    modalExplicacion5.classList.remove("display-none");
    siguiente5.classList.remove("display-none");
    enviar5.disabled = true;
    resp1_5.disabled = true;
    resp2_5.disabled = true;
    resp3_5.disabled = true;
    respuestaCorrecta5.classList.add("respuesta-correcta");
    if (resp2_5.checked) {
        contador++;
    }
};
siguiente5.onclick = function() {
    Puntuaciones.classList.remove("display-none");
    pregunta5.classList.add("display-none");
    porcentaje = parseInt((contador * 100) / 5);

    const PorcentajeAcertado = document.createElement("H3");
    PorcentajeAcertado.innerHTML = "Usted acertó el " + porcentaje + " % ";

    const Puntuacion = document.querySelector(".PuntuacionTexto1");
    Puntuacion.appendChild(PorcentajeAcertado);
};

siguiente6.onclick = function() {
    siguiente6.classList.add("display-none");
};