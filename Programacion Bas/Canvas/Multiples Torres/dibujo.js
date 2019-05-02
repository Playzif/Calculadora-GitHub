var texto = document.getElementById('texto_lineas')
var boton = document.getElementById('botoncito')
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext ("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
  {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf, yf, xi;
    var nxf, nxy;
    var colorcito = "green"
    var espacio = ancho / lineas

    while (l < lineas)
    {
      yi = espacio * l;
      xf = espacio * (l + 1);
      xi = espacio * l;
      yf = espacio * (l + 1);
      nxf = 300 - xf;
      nxy = 300 - yf
      dibujarLinea("black", 0, yi, xf, 300);
      dibujarLinea("black", xi, 300, 300, nxy);
      dibujarLinea("black", xi, 0, 300, yf);
      dibujarLinea("black", 0, xf, nxf, 0);
      console.log("linea" + 1);
      l = l + 1;
    }
  }
