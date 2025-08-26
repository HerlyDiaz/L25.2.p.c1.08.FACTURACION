"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_Articulos = /** @class */ (function () {
    function Cl_Articulos(n, p, c) {
        this._nombre = n;
        this._precio = p;
        this._cantidad = c;
    }
    Object.defineProperty(Cl_Articulos.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (n) {
            this._nombre = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cl_Articulos.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (p) {
            this._precio = +p;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cl_Articulos.prototype, "cantidad", {
        get: function () {
            return this._cantidad;
        },
        set: function (c) {
            this._cantidad = +c;
        },
        enumerable: false,
        configurable: true
    });
    Cl_Articulos.prototype.subtotal = function () {
        return this.precio * this.cantidad;
    };
    return Cl_Articulos;
}());
exports.default = Cl_Articulos;
