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

/**
 * Genera al jugador en la posicion establecida
 * @method DibujarJugador
 * @param {string}
 * @param {number}
 * @return
 */
function DibujarJugador () {
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");


    ctx.arc(x=posicionX, y=posicionY, radius=14, starAngle=0, endAngle=2*Math.PI);
    ctx.fillStyle = "#2233aa";
    ctx.fill();


}
/**
 * Mueve el personaje hacia abajo
 * @method MoverAbajo
 * @param {string}
 * @param {number}
 * @return
 */
function MoverAbajo(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

    if(posicionY<380)posicionY+=40;
    LimpiarCanvas();
    DibujarCuadriculado();
}
/**
 * Mueve el personaje hacia la derecha
 * @method MoverDerecha
 * @param {string}
 * @param {number}
 * @return
 */
function MoverDerecha(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

    if(posicionX<380)posicionX+=40;
    LimpiarCanvas();
    DibujarCuadriculado();
}
/**
 * Mueve el personaje hacia la iazquierda
 * @method MoverIzquierda
 * @param {string}
 * @param {number}
 * @return
 */
function MoverIzquierda(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

    if(posicionX>20) posicionX-=40;
    LimpiarCanvas();
    DibujarCuadriculado();
}
/**
 * Mueve el personaje hacia arriba
 * @method MoverArriba
 * @param {string}
 * @param {number}
 * @return
 */
function MoverArriba(){
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");
    if(posicionY>20)  posicionY-=40;

    LimpiarCanvas();
    DibujarCuadriculado();
}
/**
 * Limpia el canvas y reinicia la posicion del jugador
 * @method LimpiarCanvas1
 * @param {string}
 * @param {number}
 * @return
 */

function LimpiarCanvas1(){
    LimpiarCanvas();
    posicionX=20;
    posicionY=20;

}