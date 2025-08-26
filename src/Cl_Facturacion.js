"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_Facturacion = /** @class */ (function () {
    function Cl_Facturacion() {
        this.acSubtotal = 0;
    }
    Cl_Facturacion.prototype.procesarArticulo = function (a) {
        this.acSubtotal += a.subtotal();
    };
    Cl_Facturacion.prototype.subtotalFactura = function () {
        return this.acSubtotal;
    };
    Cl_Facturacion.prototype.montoIVA16XCiento = function () {
        return (this.acSubtotal * 16) / 100;
    };
    Cl_Facturacion.prototype.totalFactura = function () {
        return this.acSubtotal + this.montoIVA16XCiento();
    };
    return Cl_Facturacion;
}());
exports.default = Cl_Facturacion;
