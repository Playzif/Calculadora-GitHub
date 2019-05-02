var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push (new Pakiman("Pokacho", 80, 50, "Aire"));
coleccion.push (new Pakiman ("Tocinauro", 120, 40, "Mental"));
coleccion.push (new Pakiman("Cauchin", 100, 30, "Tierra"));

for(var pamela of coleccion)
  {
    pamela.mostrar()
  }
