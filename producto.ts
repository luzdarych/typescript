interface IProducto {
    nombre: string;
    precio: number;
    cantidad: number;
    calculartotal(): number;
}

class CantidadTotal implements IProducto {
    nombre: string;
    precio: number;
    cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    calculartotal(): number {
    let resultado = this.precio * this.cantidad;
    return resultado;

}
}
const producto1 = new CantidadTotal("camiseta", 30000, 3);
const resultado1 = producto1.calculartotal();
console.log( resultado1);
