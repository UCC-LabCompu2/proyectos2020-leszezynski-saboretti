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
    var Alto =document.getElementById(elementid ="posicion").value;
    var Ancho =document.getElementById(elementid ="posicion").value;
    var alturaMax = canvas.height;
    var anchuraMax = canvas.width;

    //Dibujar lineas horizanotales
    ctx.beginPath();
    for (var i = 0; i < alturaMax;) {
        ctx.moveTo(x = 0, y = i);
        ctx.lineTo(x = anchuraMax, y = i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        i = i + 400/Alto;
    }
    ctx.closePath();

    //Dibujar linaes verticales
    ctx.beginPath();
    for (var i = 0; i < anchuraMax;) {
        ctx.moveTo(x = i, y = 0);
        ctx.lineTo(x = i, y = alturaMax);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        i = i + 400/Ancho;
    }
    ctx.closePath();
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
}
var t=creartablero(value);
var pX=0;
var pY=0;
var vidas=(document.getElementById(elementid="posicion").value)/2+1;

function MoverIzquierda(){
    if(pX>0)pX=pX-1;
    if (t[pX][pY]==1) {
        vidas = vidas - 1;
        alert("BOMBA!");
    }

}
function MoverDerecha(){
    if(pX<(document.getElementById(elementid="posicion").value)-1)pX=pX+1;
    if (t[pX][pY]==1){
        vidas=vidas-1;
        alert("BOMBA!");
    }

}
function MoverArriba(){
    if(pY>0)pY=pY-1;
    if (t[pX][pY]==1) {
        vidas = vidas - 1;
        alert("BOMBA!");
    }

}
function MoverAbajo(){
    if(pY<(document.getElementById(elementid="posicion").value)-1)pY=pY+1;
    if (t[pX][pY]==1) {
        vidas = vidas - 1;
        alert("BOMBA!");

    }
}
function Explorar(){
    var contador=0;
    if(pX>0&&t[pX-1][pY]==1)contador++;
    if(pY>0&&t[pX][pY-1]==1)contador++;
    if(pY<(document.getElementById(elementid="posicion").value)&&t[pX][pY+1])contador++;
    if(pX<(document.getElementById(elementid="posicion").value)&&t[pX+1][pY])contador++;
    return contador;
}