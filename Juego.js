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
function crearTablero(){
    var vidas =document.getElementById(elementid="vidas").value;
    var minas =document.getElementById(elementid="Minas").value;

}