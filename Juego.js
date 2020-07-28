/**
 * Dibuja la cuadricula segun el parametro dado por el usuario
 * @method DibujarCuadriculado
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
    Crater(bomba1);
    Crater(bomba2);
    Crater(bomba3);
    Crater(bomba4);
    Crater(bomba5);
    Crater(bomba6);
    Crater(bomba7);
    Crater(bomba8);
    Crater(bomba9);
    Crater(bomba10);
    Crater(bomba11);
    Crater(bomba12);
    Crater(bomba13);
    Crater(bomba14);
    Crater(bomba15);
    DibujarJugador ();
    DibujarVidas();

}
/**
 * Limpia el canvas para poder crear otro cuadriculado
 * @method LimpiarCanvas
 * @return
 */
function LimpiarCanvas() {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

}


var estado_juego=1;
var posicionX=20;
var posicionY=20;
var puntaje={
    vidas:6,
    bombas:15,
}

/**
 * Muestra en un nuevo canvas el numero de vidas y bombas que hay en el tablero
 * @method DibujarVidas
 * @return
 */

function DibujarVidas(){

    var canvas = document.getElementById(elementid = "myCanvas2");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    ctx.font="16px Arial";
    ctx.fillStyle="#000000"
    ctx.fillText("Vidas: "+puntaje.vidas,8,15);
    ctx.font="16px Arial";
    ctx.fillStyle="#000000"
    ctx.fillText("Bombas: "+puntaje.bombas,300,15);

}


/**
 * Genera al jugador en la posicion establecida
 * @method DibujarJugador
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
 * @return
 */
function MoverAbajo() {
    if (estado_juego == 1) {
        var canvas = document.getElementById(elementid = "myCanvas");
        var ctx = canvas.getContext("2d");

        if (posicionY < 380) posicionY += 40;

        LimpiarCanvas();
        DibujarCuadriculado();
        colision();
    }
}
/**
 * Mueve el personaje hacia la derecha
 * @method MoverDerecha
 * @return
 */
function MoverDerecha(){
    if (estado_juego == 1) {
        var canvas = document.getElementById(elementid = "myCanvas");
        var ctx = canvas.getContext("2d");

        if (posicionX < 380) posicionX += 40;

        LimpiarCanvas();
        DibujarCuadriculado();
        colision();
    }
}
/**
 * Mueve el personaje hacia la iazquierda
 * @method MoverIzquierda
 * @return
 */
function MoverIzquierda(){
    if (estado_juego == 1) {
        var canvas = document.getElementById(elementid = "myCanvas");
        var ctx = canvas.getContext("2d");

        if (posicionX > 20) posicionX -= 40;

        LimpiarCanvas();
        DibujarCuadriculado();
        colision();
    }
}
/**
 * Mueve el personaje hacia arriba
 * @method MoverArriba
 * @return
 */
function MoverArriba(){
    if (estado_juego == 1) {
        var canvas = document.getElementById(elementid = "myCanvas");
        var ctx = canvas.getContext("2d");
        if (posicionY > 20) posicionY -= 40;

        LimpiarCanvas();
        DibujarCuadriculado();
        colision();
    }
}
/**
 * Limpia el canvas y reinicia la posicion del jugador
 * @method LimpiarCanvas1
 * @return
 */

function LimpiarCanvas1(){
    location.reload();

}


var tesoro={
    x:260,
    y:260,
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
    x:380,
    y:380,
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
/**
 * Detecta si al moverse el jugador se topa con una bomba o el tesoro
 * @method colision
 * @return
 */
function colision(){
    if(posicionX==bomba1.x && posicionY==bomba1.y&& bomba1.status==1){
        alert("BOMBA!!!");
        bomba1.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba1);
    }
    else if(posicionX==bomba2.x && posicionY==bomba2.y&& bomba2.status==1){
        alert("BOMBA!!!");
        bomba2.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba2);
    }
    else if(posicionX==bomba3.x && posicionY==bomba3.y&& bomba3.status==1){
        alert("BOMBA!!!");
        bomba3.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba3);
    }
    else if(posicionX==bomba4.x && posicionY==bomba4.y&& bomba4.status==1){
        alert("BOMBA!!!");
        bomba4.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba4);
    }
    else if(posicionX==bomba5.x && posicionY==bomba5.y&& bomba5.status==1){
        alert("BOMBA!!!");
        bomba5.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba5);
    }
    else if(posicionX==bomba6.x && posicionY==bomba6.y&& bomba6.status==1){
        alert("BOMBA!!!");
        bomba6.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba6);
    }
    else if(posicionX==bomba7.x && posicionY==bomba7.y&& bomba7.status==1){
        alert("BOMBA!!!");
        bomba7.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba7);
    }
    else if(posicionX==bomba8.x && posicionY==bomba8.y&& bomba8.status==1){
        alert("BOMBA!!!");
        bomba8.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba8);
    }
    else if(posicionX==bomba9.x && posicionY==bomba9.y&& bomba9.status==1){
        alert("BOMBA!!!");
        bomba9.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba9);
    }
    else if(posicionX==bomba10.x && posicionY==bomba10.y&& bomba10.status==1){
        alert("BOMBA!!!");
        bomba10.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba10);
    }
    else if(posicionX==bomba11.x && posicionY==bomba11.y&& bomba11.status==1){
        alert("BOMBA!!!");
        bomba11.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba11);
    }
    else if(posicionX==bomba12.x && posicionY==bomba12.y&& bomba12.status==1){
        alert("BOMBA!!!");
        bomba12.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba12);
    }

    else if(posicionX==bomba13.x && posicionY==bomba13.y&& bomba13.status==1){
        alert("BOMBA!!!");
        bomba13.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba13);
    }
    else if(posicionX==bomba14.x && posicionY==bomba14.y&& bomba14.status==1){
        alert("BOMBA!!!");
        bomba14.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba14);
    }
    else if(posicionX==bomba15.x && posicionY==bomba15.y&& bomba15.status==1){
        alert("BOMBA!!!");
        bomba15.status=0;
        puntaje.vidas--;
        puntaje.bombas--;
        Explosion(bomba15);
    }
    else if(posicionX==tesoro.x && posicionY==tesoro.y){
        setInterval(Animar, 40);
        alert("YOU WIN");
        estado_juego=0;

    }
    if(puntaje.vidas==0){
        alert("GAME OVER");
        DibujarVidas();
        estado_juego=0;
    }

}
/**
 * Dibuja la explosion de una bomba
 * @method Explosion
 * @param {string} bomba-de cual de las 15 bombas se toman los parametros
 * @return
 */
function Explosion(bomba) {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");


    var img = new Image();
    img.src="Imagenes/Explosion.png";

    img.onload = function () {
        ctx.drawImage(img, x=bomba.x-19, y=bomba.y-19, 38, 38);
    }
}
/**
 * Dibuja el crater tras la explosion de una bomba
 * @method Crater
 * @param {string} bomba-de cual de las 15 bombas se toman los parametros
 * @return
 */
function Crater(bomba){
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");

    if(bomba.status==0){
        var img = new Image();
        img.src="Imagenes/Crater.png";

        img.onload = function () {
            ctx.drawImage(img, x=bomba.x-19, y=bomba.y-19, 38, 38);
        }
    }
}

y1=0;
dy1=1;
/**
 * Anima el tesoro al ser encontrado
 * @method Animar
 * @return
 */

function Animar(){
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");

    var img1 = new Image();
    img1.src="Imagenes/chest/1.png";
    var img2 = new Image();
    img2.src="Imagenes/chest/2.png";
    var img3 = new Image();
    img3.src="Imagenes/chest/3.png";
    var img4 = new Image();
    img4.src="Imagenes/chest/4.png";

    if(y1<10){
        img1.onload = function(){
            ctx.drawImage(img1, dx= tesoro.x-19, dy=tesoro.y-19,38, 38 );
        }
    }
    if(y1>=10&&y1<20){
        img1.onload = function(){
            ctx.drawImage(img2, dx= tesoro.x-19, dy=tesoro.y-19,38, 38 );
        }
    }
    if(y1>=20&&y1<30){
        img1.onload = function(){
            ctx.drawImage(img3, dx= tesoro.x-19, dy=tesoro.y-19,38, 38 );
        }
    }
    if(y1>=30&&y1<40){
        img1.onload = function(){
            ctx.drawImage(img4, dx= tesoro.x-19, dy=tesoro.y-19,38, 38 );
        }
    }
    y1+=dy1;

}
var s=0;
/**
 * Indica si la bomba establecida esta a un movimiento de distancia del jugador
 * @method explorar
 * @param {string} bomba-de cual de las 15 bombas se toman los parametros
 * @return
 */
function explorar(bomba){
    if(posicionX-40==bomba.x&&posicionY==bomba.y&&bomba.status==1){
        s++;
    }
    if(posicionX+40==bomba.x&&posicionY==bomba.y&&bomba.status==1){
        s++;
    }
    if(posicionX==bomba.x&&posicionY+40==bomba.y&&bomba.status==1){
        s++;
    }
    if(posicionX==bomba.x&&posicionY-40==bomba.y&&bomba.status==1){
        s++;
    }
}
/**
 * Utiliza la funcion explorar para cada una de las bombas
 * @method explorar
 * @return
 */
function BotonExplorar(){
    s=0;
    explorar(bomba1);
    explorar(bomba2);
    explorar(bomba3);
    explorar(bomba4);
    explorar(bomba5);
    explorar(bomba6);
    explorar(bomba7);
    explorar(bomba8);
    explorar(bomba9);
    explorar(bomba10);
    explorar(bomba11);
    explorar(bomba12);
    explorar(bomba13);
    explorar(bomba14);
    explorar(bomba15);

    alert("Hay un total de "+s+" bombas en su inmediatez");
}