
let l = parseInt(prompt("Ingrese los litros de leche que produce"))

let pg = parseFloat(prompt("Ingrese el precio del galon"))
// 1 galo    = 3.785 litros

let tg = parseFloat(l / 3.78)

let ga = parseFloat(pg * tg)

console.log(`La ganancia por ${tg} galones de leche entregados es ${ga}`)