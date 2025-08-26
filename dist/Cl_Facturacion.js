import Cl_Articulos from "./Cl_Articulos.js";
export default class Cl_Facturacion {
    acSubtotal = 0;
    constructor() { }
    procesarArticulo(a) {
        this.acSubtotal += a.subtotal();
    }
    subtotalFactura() {
        return this.acSubtotal;
    }
    montoIVA16XCiento() {
        return (this.acSubtotal * 16) / 100;
    }
    totalFactura() {
        return this.acSubtotal + this.montoIVA16XCiento();
    }
}
