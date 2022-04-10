
let ti = prompt(`Ingrese el tipo de hamburgesa: "sencilla", "doble", o "triple" `)
let n = parseInt(prompt("Ingrese el numero de hamburgesas"))

if( ti == "seniclla" ) {
    pa = 20;
    let tp = prompt(`Ingrese el tipo de pago: "tarjeta" o "debito"`)
    if( tp == "tarjeta") {
        tot = parseFloat( (n * 20) - (n * 20)*0.05);
        console.log(`El pago por ${n} hamburgesas es ${tot}`)
    }
    else {
        parseFloat(to = n * 20);
        console.log(`El pago por ${n} hamburgesas es ${to}`)
    }
}
if( ti == "doble") {
    pa = 25;
    let tp = prompt(`Ingrese el tipo de pago: "tarjeta" o "debito"`)
    if( tp == "tarjeta") {
        tot = parseFloat( (n * 25) - (n * 25)*0.05);
        console.log(`El pago por ${n} hamburgesas es ${tot}`)
    }
    else {
        to = parseFloat(n * 25);
        console.log(`El pago por ${n} hamburgesas es ${to}`)
    }
}
if( ti == "triple") {
    pa = 28;
    let tp = prompt(`Ingrese el tipo de pago: "tarjeta" o "debito"`)
    if( tp == "tarjeta") {
        tot = parseFloat( (n * 28) - (n * 28)*0.05);
        console.log(`El pago por ${n} hamburgesas es ${tot}`)
    }
    else {
        to = parseFloat(n * 28);
        console.log(`El pago por ${n} hamburgesas es ${to}`)
    }
}