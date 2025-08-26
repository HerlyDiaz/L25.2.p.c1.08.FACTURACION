"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_Articulos_js_1 = require("./Cl_Articulos.js");
var Cl_Facturacion_js_1 = require("./Cl_Facturacion.js");
var articulo1 = new Cl_Articulos_js_1.default("Harina", 40, 2);
var articulo2 = new Cl_Articulos_js_1.default("Arroz", 45, 4);
var articulo3 = new Cl_Articulos_js_1.default("Azucar", 45, 2);
var articulo4 = new Cl_Articulos_js_1.default("Pasta", 47.5, 3);
var Facturacion = new Cl_Facturacion_js_1.default();
Facturacion.procesarArticulo(articulo1);
Facturacion.procesarArticulo(articulo2);
Facturacion.procesarArticulo(articulo3);
Facturacion.procesarArticulo(articulo4);
console.log("Subtotal del art\u00EDculo ".concat(articulo1.nombre, ": ").concat(articulo1.subtotal(), "Bs"));
console.log("Subtotal del art\u00EDculo ".concat(articulo2.nombre, ": ").concat(articulo2.subtotal(), "Bs"));
console.log("Subtotal del art\u00EDculo ".concat(articulo3.nombre, ": ").concat(articulo3.subtotal(), "Bs"));
console.log("Subtotal del art\u00EDculo ".concat(articulo4.nombre, ": ").concat(articulo4.subtotal(), "Bs"));
console.log("Subtotal de la factura: ".concat(Facturacion.subtotalFactura(), "Bs"));
console.log("Monto a pagar por IVA (16%): ".concat(Facturacion.montoIVA16XCiento(), "Bs"));
console.log("Total de la factura: ".concat(Facturacion.totalFactura(), "Bs"));
var salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = "Subtotal del art\u00EDculo ".concat(articulo1.nombre, ": ").concat(articulo1.subtotal(), "Bs<br>\n    Subtotal del art\u00EDculo ").concat(articulo2.nombre, ": ").concat(articulo2.subtotal(), "Bs<br>\n    Subtotal del art\u00EDculo ").concat(articulo3.nombre, ": ").concat(articulo3.subtotal(), "Bs<br>\n    Subtotal del art\u00EDculo ").concat(articulo4.nombre, ": ").concat(articulo4.subtotal(), "Bs<br>\n    Subtotal de la factura: ").concat(Facturacion.subtotalFactura(), "Bs<br>\n    Monto a pagar por IVA (16%): ").concat(Facturacion.montoIVA16XCiento(), "Bs<br>\n    Total de la factura: ").concat(Facturacion.totalFactura(), "Bs");
}
else
    console.error("ERROR");
