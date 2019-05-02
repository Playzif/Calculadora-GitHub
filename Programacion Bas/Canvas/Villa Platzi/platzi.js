var vp = document.getElementById('villaPlatzi')
var papel = vp.getContext("2d")
var cerdo = {url: "cerdo.png", cargaOk: false}
var pollo = {url: "pollo.png", cargaOk: false}
var vaca = {url: "vaca.png", cargaOk: false}
var fondo = {url: "tile.png", cargaOk: false}
var cantidad = aleatorio(1, 5)
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGTH: 39};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

cerdo.posx = aleatorio(0, 7) * 60;
cerdo.posy = aleatorio(0, 10) * 40;
cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

function cargarCerdo()
  {
    cerdo.cargaOk = true;
    dibujar()
  }

function cargarPollo()
  {
    pollo.cargaOk = true;
    dibujar()
  }

function cargarVaca()
  {
    vaca.cargaOk = true;
    dibujar()
  }

function cargarFondo()
  {
    fondo.cargaOk = true;
    dibujar()
  }

function dibujar()
  {
    if (fondo.cargaOk == true)
    {
      papel.drawImage(fondo.objeto, 0, 0);
    }

    if (vaca.cargaOk == true)
    {
      for (var v=0; v < cantidad; v++)
        {
          var x = aleatorio(0, 5)
          var y = aleatorio(0, 5)
          var x = x * 70;
          var y = y * 70;
          papel.drawImage(vaca.objeto, x, y);
        }
    }

    if (cerdo.cargaOk == true)
      {
        for (var v=0; v < cantidad; v++)
        {
          var x = aleatorio(0, 5)
          var y = aleatorio(0, 5)
          var x = x * 70;
          var y = y * 70;
          papel.drawImage(cerdo.objeto, x, y);
        }
      }
    if (pollo.cargaOk == true)
      {
        for (var v=0; v < cantidad; v++)
        {
          var x = aleatorio(0, 5)
          var y = aleatorio(0, 5)
          var x = x * 70;
          var y = y * 70;
          papel.drawImage(pollo.objeto, x, y);
        }
      }
  }

function aleatorio(min, maxi)
  {
    var resultado
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
  }
