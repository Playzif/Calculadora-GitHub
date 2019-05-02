class Pakiman
  {
    constructor(n, v, a, t)
      {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = t;

        this.imagen.src = imagenes[this.nombre];
      }
    hablar()
      {
        alert(this.nombre);
      }
    mostrar()
      {
        document.body.appendChild(this.imagen);
        document.write("<p>")
        document.write("<strong>" + this.nombre +"</strong><br />")
        document.write("Vida: " + this.vida +"<br />")
        document.write("Ataque: " + this.ataque +"<br />")
        document.write("Tipo: " + this.tipo +"<hr />")
        document.write("</p>")
      }
  }
