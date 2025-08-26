import Cl_Articulos from "./Cl_Articulos.js";
import Cl_Facturacion from "./Cl_Facturacion.js";
const articulo1 = new Cl_Articulos("Harina", 40, 2);
const articulo2 = new Cl_Articulos("Arroz", 45, 4);
const articulo3 = new Cl_Articulos("Azucar", 45, 2);
const articulo4 = new Cl_Articulos("Pasta", 47.5, 3);
const Facturacion = new Cl_Facturacion();
Facturacion.procesarArticulo(articulo1);
Facturacion.procesarArticulo(articulo2);
Facturacion.procesarArticulo(articulo3);
Facturacion.procesarArticulo(articulo4);
console.log(`Subtotal del artículo ${articulo1.nombre}: ${articulo1.subtotal()}Bs`);
console.log(`Subtotal del artículo ${articulo2.nombre}: ${articulo2.subtotal()}Bs`);
console.log(`Subtotal del artículo ${articulo3.nombre}: ${articulo3.subtotal()}Bs`);
console.log(`Subtotal del artículo ${articulo4.nombre}: ${articulo4.subtotal()}Bs`);
console.log(`Subtotal de la factura: ${Facturacion.subtotalFactura()}Bs`);
console.log(`Monto a pagar por IVA (16%): ${Facturacion.montoIVA16XCiento()}Bs`);
console.log(`Total de la factura: ${Facturacion.totalFactura()}Bs`);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `Subtotal del artículo ${articulo1.nombre}: ${articulo1.subtotal()}Bs<br>
    Subtotal del artículo ${articulo2.nombre}: ${articulo2.subtotal()}Bs<br>
    Subtotal del artículo ${articulo3.nombre}: ${articulo3.subtotal()}Bs<br>
    Subtotal del artículo ${articulo4.nombre}: ${articulo4.subtotal()}Bs<br>
    Subtotal de la factura: ${Facturacion.subtotalFactura()}Bs<br>
    Monto a pagar por IVA (16%): ${Facturacion.montoIVA16XCiento()}Bs<br>
    Total de la factura: ${Facturacion.totalFactura()}Bs`;
}
else
    console.error("ERROR");
