var evento = 0;
var colorLinea = "White"
var cuadrito = document.getElementById("dibujomouse")
var papel = cuadrito.getContext("2d")
var x
var y

document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);

dibujarLinea("Blue", 0, 0, 302, 0, papel)
dibujarLinea("Blue", 302, 302, 0, 302, papel)
dibujarLinea("Blue", 0, 302, 0, 0, papel)
dibujarLinea("Blue", 302, 0, 302, 302, papel)

function dibujarMouse(evento)
{
 if (estado == 1)
 {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

function presionarMouse(evento)
{
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function soltarMouse(evento)
{
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
