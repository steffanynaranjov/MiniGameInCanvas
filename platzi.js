var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

document.addEventListener("keydown", moverCerdo);
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var xCerdo = 0;
var yCerdo = 0;

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var xVaca = new Array();
var yVaca = new Array();

var pollo = {
    url: "pollo.png",
    cargaOK: false
};
var xPollo = new Array();
var yPollo = new Array();


var cantidad_pollos = aleatorio(5, 15);
var cantidad_vacas = aleatorio(1, 5);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

function moverCerdo(evento) {
    var movimiento = 50;
    var teclas = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

    switch (evento.keyCode) {
        case teclas.UP:
            if (yCerdo > 0) {
                yCerdo = yCerdo - movimiento;
                dibujar();
            }
            break;
        case teclas.DOWN:
            if (yCerdo < 450) {
                yCerdo = yCerdo + movimiento;
                dibujar();
            }
            break;
        case teclas.LEFT:
            if (xCerdo > 0) {
                xCerdo = xCerdo - movimiento;
                dibujar();
            }
            break;
        case teclas.RIGHT:
            if (xCerdo < 450) {
                xCerdo = xCerdo + movimiento;
                dibujar();
            }
            break;
        default:
            console.log("Otra tecla : " + evento.key);
            break;
    }
}


function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    mantenerPosicion();
}

function cargarPollo() {
    pollo.cargaOK = true;
    mantenerPosicion();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function mantenerPosicion() {
    if (vaca.cargaOK) {
        for (var i = 0; i < cantidad_vacas; i++) {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x * 70;
            var y = y * 70;
            xVaca[i] = x;
            yVaca[i] = y;
        }
    }
    if (pollo.cargaOK) {
        for (var i = 0; i < cantidad_pollos; i++) {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x * 70;
            var y = y * 70;
            xPollo[i] = x;
            yPollo[i] = y;
        }
    }
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.objeto, 0, 0);

    }
    if (vaca.cargaOK) {
        for (var i = 0; i < cantidad_vacas; i++) {
            papel.drawImage(vaca.objeto, xVaca[i], yVaca[i]);
        }
    }
    if (pollo.cargaOK) {
        for (var i = 0; i < cantidad_pollos; i++) {
            papel.drawImage(pollo.objeto, xPollo[i], yPollo[i]);
        }
    }
    if (cerdo.cargaOK) {
        papel.drawImage(cerdo.objeto, xCerdo, yCerdo);
    }
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}