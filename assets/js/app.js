var cerrarPandas=document.getElementsByClassName("tache");
var fotoPanda=document.getElementsByClassName("fotoPanda");

for(var i=0; i<cerrarPandas.length; i++){
  cerrarPandas[i].addEventListener("click",quitarImagen);
}

function quitarImagen() {
  var div = this.parentElement;
  div.style.display = "none";
}
