/**
 * Dibuja la cuadricula segun el parametro dado por el usuario
 * @method DibujarCuadriculado
 * @param {string}
 * @param {number}
 * @return
 */
function DibujarCuadriculado() {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchuraMax = canvas.width;

    //Dibujar lineas horizanotales
    ctx.beginPath();
    for (var i = 0; i < alturaMax;) {
        ctx.moveTo(x = 0, y = i);
        ctx.lineTo(x = anchuraMax, y = i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        i = i + 400/10;
    }
    ctx.closePath();

    //Dibujar linaes verticales
    ctx.beginPath();
    for (var i = 0; i < anchuraMax;) {
        ctx.moveTo(x = i, y = 0);
        ctx.lineTo(x = i, y = alturaMax);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        i = i + 400/10;
    }
    ctx.closePath();
    DibujarJugador ();
}
/**
 * Limpia el canvas para poder crear otro cuadriculado
 * @method LimpiarCanvas
 * @param {string}
 * @param {number}
 * @return
 */
function LimpiarCanvas() {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

}
/**
 * Genera uno de los 3 tablero dependiendo de la desicion del ususario
 * @method crearTablero
 * @param {string}
 * @param {number} value-el numero de celdas
 * @return tablero
 */
/**
function crearTablero(value){
    if(value==5){
        var tablero=
                [[0,0,0,0,0],
                [0,0,1,0,1],
                [1,0,0,0,0],
                [0,1,0,3,1],
                [0,0,0,0,0]];
    }
    if(value==10){
        var tablero=
                [[0,0,0,1,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,1,0,0,0,1,0,0,1,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1,0,0,0],
                [1,0,0,0,0,1,0,0,0,0],
                [0,0,3,1,0,0,0,1,0,0],
                [0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,1]
            ];
            }
    if(value==15){
        var tablero=
                [[0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
                [0,0,1,0,0,1,0,0,0,0,1,0,0,1,0],
                [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0],
                [0,0,0,1,0,1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1,0,1,0,1,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,3,0,0],
                [0,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
                [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0],
                [0,1,0,0,0,0,0,0,0,0,1,0,0,1,0],
                [0,0,1,0,0,1,0,0,1,0,0,0,1,0,0],
                [0,0,0,1,0,0,0,1,0,0,1,0,0,0,0],
                [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,1,0,0,1,0,1,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,1,0,0,0,1]];
    }
    return tablero;
}*/
var tablero=
        [[0,0,0,1,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,1,0,0,0],
        [1,0,0,0,0,1,0,0,0,0],
        [0,0,3,1,0,0,0,1,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1]
    ];
var posicionX=20;
var posicionY=20;
var vidas=6;

    function DibujarJugador () {
        var canvas= document.getElementById(elementid="myCanvas");
        var ctx= canvas.getContext("2d");


        ctx.arc(x=posicionX, y=posicionY, radius=14, starAngle=0, endAngle=2*Math.PI);
        ctx.fillStyle = "#2233aa";
        ctx.fill();


}

function MoverAbajo(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

    if(posicionY<380)posicionY+=40;
LimpiarCanvas();
DibujarCuadriculado();
}
function MoverDerecha(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

    if(posicionX<380)posicionX+=40;
    LimpiarCanvas();
    DibujarCuadriculado();
}

function MoverIzquierda(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

   if(posicionX>20) posicionX-=40;
    LimpiarCanvas();
    DibujarCuadriculado();
}

function MoverArriba(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");
if(posicionY>20)  posicionY-=40;

    LimpiarCanvas();
    DibujarCuadriculado();
}






function LimpiarCanvas1(){
        LimpiarCanvas();
    posicionX=20;
    posicionY=20;

}