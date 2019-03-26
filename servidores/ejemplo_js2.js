
/*
Definir los datos meteorologiocos de la temperatura de los proximos 6 dias
*/

tiempo = [
      {dia:"miercoles", cielo:"Lluvia", temperatura:"baja"},
      {dia:"jueves", cielo:"Nublado", temperatura:"sube"},
      {dia:"viernes", cielo:"Sol", temperatura:"sube"},
      {dia:"sabado", cielo:"Sol", temperatura:"sube"},
      {dia:"domingo", cielo:"Lluvia", temperatura:"baja"},
      {dia:"lunes", cielo:"Lluvia", temperatura:"baja"}
    ]


/*
Imprimir los datos usando 'for' y console.log
*/

console.log(tiempo[0])
console.log(tiempo[1])
console.log(tiempo[2])
console.log(tiempo[3])
console.log(tiempo[4])
console.log(tiempo[5])



var i;
console.log("Días lluviosos:")
for (i = 0; i < tiempo.length; i++) {
    //console.log(i)
    if (tiempo[i].cielo == "Lluvia") {
        //console.log(tiempo[i].dia + " " + tiempo[i].cielo)
        console.log(tiempo[i].dia)
    }
}

/*
Crear una pagina HTML con los datos anteriores usando imagenes
*/
