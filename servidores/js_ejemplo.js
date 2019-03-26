
z = -1;
while (z != 10) {
  z = Math.floor(Math.random() * 510);
  console.log("El valor de z es: " + z)

//si la suma es > 10. Print "es mayor que 10"
//si no:"si es menor que 10"
//si = 10:"es igual a 10"
//pista: usa "if / else"

console.log(z)
if (z > 10) {
  //true
  console.log("z es > 10")
} else if (z < 10) {
  //true
  console.log("z es < 10")
} else if (z == 10) {
  //true
  console.log("z es = 10")
}

}
