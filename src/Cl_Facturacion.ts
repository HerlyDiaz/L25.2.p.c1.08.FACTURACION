import Cl_Articulos from "./Cl_Articulos.js";

export default class Cl_Facturacion{
    private acSubtotal:number = 0;

    constructor(){}

    procesarArticulo(a:Cl_Articulos){
        this.acSubtotal += a.subtotal();
    }

    subtotalFactura():number{
        return this.acSubtotal;
    }

    montoIVA16XCiento():number{
        return (this.acSubtotal * 16) / 100;
    }

    totalFactura():number{
        return this.acSubtotal + this.montoIVA16XCiento();
    }
}
