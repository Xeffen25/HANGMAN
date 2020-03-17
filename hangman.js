window.onload = function() {
    var palabraadivina = "Xavier"
    var falso = false;
    pintar(palabraadivina);
    var vidas = 10;
    dibujos(vidas)
    while (vidas < 10 && vidas != falso) {
        comprobarletra(letrarespuesta, palabraadivina);
    }
}

function comprobarletra(letrarespuesta, palabraadivina) {
    var letra = document.getElementById("letra").value;
    var separada = adivinar.split("");

    for (let abc = 0; abc < separada.length; abc++) {
        if (letra == separada[abc]) {
            acierto = true;
        } else {
            separada[abc] = "_"

        }

    }

}

function letrarespuesta(letrarespuesta) {
    var letrarespuesta = document.getElementById("letrarespuesta").value

}

function dibujos(valor) {
    document.getElementById("foto").src = "./img/" + valor + ".png";
}

function pintar(palabraadivina) {
    var final = "";
    for (let ggg = 0; ggg < palabraadivina.length; ggg++) {
        final = final + "_ "
    }
    document.getElementById("parrafo").innerHTML = final
}
if (acierto) {
    document.getElementById("resultado").innerHTML = separada.join(" ");
} else {
    vides--;
    dibujos(vides)

}