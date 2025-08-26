export default class Cl_Articulos {
    _nombre;
    _precio;
    _cantidad;
    constructor(n, p, c) {
        this._nombre = n;
        this._precio = p;
        this._cantidad = c;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set precio(p) {
        this._precio = +p;
    }
    get precio() {
        return this._precio;
    }
    set cantidad(c) {
        this._cantidad = +c;
    }
    get cantidad() {
        return this._cantidad;
    }
    subtotal() {
        return this.precio * this.cantidad;
    }
}
