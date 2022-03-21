function myFunction(){

    var contenedor_div = document.getElementsByTagName("div")[0];
    var objeto_lista = document.createElement("select");
    contenedor_div.appendChild(objeto_lista);
    var objeto_opcion_vacia = document.createElement("option");
    var contenedor_lista=  document.getElementsByTagName("select")[0];
    contenedor_lista.onchange=meterParrafo;
    contenedor_lista.appendChild(objeto_opcion_vacia);
    objeto_opcion_vacia.innerHTML="Seleccione";
    objeto_opcion_vacia.selected=true;
    for(i=0; i<opciones_conciertos.length; i++){
        
        var objeto_opciones = document.createElement("option");
        contenedor_lista.appendChild(objeto_opciones);
        objeto_opciones.value=opciones_conciertos[i].valor;
        objeto_opciones.innerHTML=opciones_conciertos[i].nombre;

    }
  
}

function meterParrafo(){

    var contenedor_div2= document.getElementsByTagName("div")[1];

    var valorSelect = document.getElementsByTagName("select")[0].value;


    switch(valorSelect) {
        case "acdc":
            var parrafo = document.createElement("p");
            parrafo.innerHTML = "El concierto de "+opciones_conciertos[0].nombre  + " vale " +opciones_conciertos[0].precio;
            contenedor_div2.appendChild(parrafo);
          break;
        case "iron":
            var parrafo = document.createElement("p");
            parrafo.innerHTML = "El concierto de "+opciones_conciertos[1].nombre  + " vale " +opciones_conciertos[1].precio;
            contenedor_div2.appendChild(parrafo);
          break;
        default:
      }


}
