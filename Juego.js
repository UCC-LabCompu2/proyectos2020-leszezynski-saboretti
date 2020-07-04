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
var puntaje={
    vidas:6,
    bombas:15,
    dibujar: function(){
        ctx.font="16px Arial";
        ctx.fillStyle="#000000"
        ctx.fillText("Vidas: "+this.vidas,8,20);
    }

}


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
    colision();
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
    colision();
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
    colision();
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
    colision();
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
var bomba1={
    x:140,
    y:20,
    status:1
};
var bomba2={
    x:300,
    y:20,
    status:1
};
var bomba3={
    x:60,
    y:100,
    status:1
}
var bomba4={
    x:60,
    y:100,
    status:1
}
var bomba5={
    x:220,
    y:100,
    status:1
}
var bomba6={
    x:340,
    y:100,
    status:1
}
var bomba7={
    x:100,
    y:180,
    status:1
}
var bomba8={
    x:380,
    y:180,
    status:1
}
var bomba9={
    x:260,
    y:220,
    status:1,
}
var bomba10={
    x:20,
    y:260,
    status:1
}
var bomba11={
    x:220,
    y:260,
    status:1
}
var bomba12={
    x:140,
    y:300,
    status:1
}
var bomba13={
    x:300,
    y:300,
    status:1
}
var bomba14={
    x:60,
    y:340,
    status:1
}
var bomba15={
    x:220,
    y:380,
    status:1
}
function colision(){
    if(posicionX==bomba1.x && posicionY==bomba1.y&& bomba1.status==1){
        alert("BOMBA!!!");
        bomba1.status=0;
    }
    else if(posicionX==bomba2.x && posicionY==bomba2.y&& bomba2.status==1){
        alert("BOMBA!!!");
        bomba2.status=0;
    }
    else if(posicionX==bomba3.x && posicionY==bomba3.y&& bomba3.status==1){
        alert("BOMBA!!!");
        bomba3.status=0;
    }
    else if(posicionX==bomba4.x && posicionY==bomba4.y&& bomba4.status==1){
        alert("BOMBA!!!");
        bomba4.status=0;
    }
    else if(posicionX==bomba5.x && posicionY==bomba5.y&& bomba5.status==1){
        alert("BOMBA!!!");
        bomba5.status=0;
    }
    else if(posicionX==bomba6.x && posicionY==bomba6.y&& bomba6.status==1){
        alert("BOMBA!!!");
        bomba6.status=0;
    }
    else if(posicionX==bomba7.x && posicionY==bomba7.y&& bomba7.status==1){
        alert("BOMBA!!!");
        bomba7.status=0;
    }
    else if(posicionX==bomba8.x && posicionY==bomba8.y&& bomba8.status==1){
        alert("BOMBA!!!");
        bomba8.status=0;
    }
    else if(posicionX==bomba9.x && posicionY==bomba9.y&& bomba9.status==1){
        alert("BOMBA!!!");
        bomba9.status=0;
    }
    else if(posicionX==bomba10.x && posicionY==bomba10.y&& bomba10.status==1){
        alert("BOMBA!!!");
        bomba10.status=0;
    }
    else if(posicionX==bomba11.x && posicionY==bomba11.y&& bomba11.status==1){
        alert("BOMBA!!!");
        bomba11.status=0;
    }
    else if(posicionX==bomba12.x && posicionY==bomba12.y&& bomba12.status==1){
        alert("BOMBA!!!");
        bomba12.status=0;
    }

    else if(posicionX==bomba13.x && posicionY==bomba13.y&& bomba13.status==1){
        alert("BOMBA!!!");
        bomba13.status=0;
    }
    else if(posicionX==bomba14.x && posicionY==bomba14.y&& bomba14.status==1){
        alert("BOMBA!!!");
        bomba14.status=0;
    }
    else if(posicionX==bomba15.x && posicionY==bomba15.y&& bomba15.status==1){
        alert("BOMBA!!!");
        bomba15.status=0;
    }


}