// datos
// N = contidad total de productos
// cantToner
// cantCabezal
// cantTinta
let total = Number(prompt("ingrese la cantidad total de productos"));

if( total < 0 ) {
    total = Number(prompt("ingrese la cantidad total de productos"));
}

let cantToner = 0;
let cantCabezal = 0;
let cantTinta = 0;
let productos = 0;
while (productos < total) {
    let tProCont = prompt(`Ingrese el producto a contabilizar: "toner", "cabezales", "tinta" o "finalizar"`)
    
    if(tProCont == "toner") {
        cantToner += 1;
    }

    if(tProCont == "cabezales") {
        cantCabezal += 1;
    }

    if(tProCont == "tinta") {
        cantTinta += 1;
    }
    else if(tProCont == "finalizar")
    break;
    productos += 1;
}

console.log(`Segun la auditoria realizada de un total de ${total} existen ${cantToner} de toners, ${cantCabezal} de cabezales y ${cantTinta} de tinta, en stock`)




