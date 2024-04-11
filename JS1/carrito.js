//3- CARRITO DE LA COMPRA: se le pide al usuario el precio de 5 productos. Se calcula el total.
// En el caso de sumar 100 euros o más, se le da un descuento del 15%. Imprimir en tal caso
// el precio original y el precio final con el descuento. Si no, solo el precio total.
// Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios.
//


const carrito = [10, 50, 20, 15, 5];
const descuento = 15;
let total = 0;
let descuentoTotal;

// iterate over each item in the array
for (let i = 0; i < carrito.length; i++ ) {
    total += carrito[i];
}

// for (let item of carrito) {
//     total += item;
// }

if (total >= 100) {
    descuentoTotal = total - ((total * descuento) / 100);
} else {
    console.log(total);
}

console.log(descuentoTotal)
console.log(total)
