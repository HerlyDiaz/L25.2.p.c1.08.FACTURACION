export default class Cl_Articulos{
    private _nombre:string;
    private _precio:number;
    private _cantidad:number;

    constructor(n:string, p:number, c:number){
        this._nombre = n;
        this._precio = p;
        this._cantidad = c;
    }

    set nombre(n:string){
        this._nombre = n;
    }

    get nombre(){
        return this._nombre;
    }

    set precio(p:number){
        this._precio = +p;
    }

    get precio(){
        return this._precio;
    }

    set cantidad(c:number){
        this._cantidad = +c;
    }

    get cantidad(){
        return this._cantidad;
    }

    subtotal():number{
        return this.precio * this.cantidad;
    }
}