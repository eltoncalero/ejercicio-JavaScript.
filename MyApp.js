// *******_EL CARACOL EN EL POZO_*******
/* un caracol recorre 7 pies en un dia y retrocede 2 pies cada noche , !cuantos dias le tomara salir del pozo si tiene una profundidad de 42 pies*/


var profundidad = 128;
var distancia = 0;
var dia = 0;

while(distancia <= profundidad) {
    distancia += 7;
    dia++

    if(distancia >= profundidad) break;
    distancia -= 2
}
console.log("el caracol saldra del pozo en el dia: \t" + dia);
console.log("\n");