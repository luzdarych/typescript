interface IEmpleado {
    calcularSalario(): number | string;
    mostrarInfo(): void;
}
class Empleado implements IEmpleado {
    private _nombre: string;
    private _salarioBase: number;

    constructor(nombre: string, salarioBase: number) {
        this._nombre = nombre;
        this._salarioBase = salarioBase;
    }
    get nombre(): string {
        return this._nombre;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    get salarioBase(): number {
        return this._salarioBase;
    }
    set salarioBase(salarioBase: number) {
        this._salarioBase = salarioBase;
    }
    public calcularSalario(): number {
        return this._salarioBase;
    }
    public mostrarInfo(): void {
        console.log(`el empleado ${this._nombre} con salrio ${this._salarioBase}`);
    }
}
class Desarrollador extends Empleado {
    private _bonoPorProyecto: number;

    constructor(nombre: string, salarioBase: number, bonoPorProyecto: number) {
        super(nombre, salarioBase);
        this._bonoPorProyecto = bonoPorProyecto;
        // this.calcularSalario()
    }


    public calcularSalario(): number {
        return super.calcularSalario() + this._bonoPorProyecto;
    }

    public mostrarInfo(): void {
        console.log(`el salario del desarrollador ${this.nombre} mas el bono da un total de  ${this.calcularSalario()}`);
    }
    get bonoPorProyecto(): number {
        return this._bonoPorProyecto;
    }
    set bonoPorProyecto(bonoPorProyecto: number) {
        this._bonoPorProyecto = bonoPorProyecto;
    }

}
class Gerente extends Empleado {
    public _equipoACargo: number;

    constructor(nombre: string, salarioBase: number, equipoACargo: number) {
        super(nombre, salarioBase);
        this._equipoACargo = equipoACargo;
    }
    public calcularSalario(): number {
        const bono = (this.salarioBase * 0.1) * this._equipoACargo;
        return this.salarioBase + bono;
    }
    public mostrarInfo(): void {
        console.log(`el Gerente ${this.nombre} tiene a cargo  ${this._equipoACargo} personas y su salario es de ${this.calcularSalario()} teniendo en cuenta que su salario aumenta en un 10% por persona a cargo`);
    }
}
const Empleado1 = new Empleado("Juan Puerto", 2000000);
const Desarrollador1 = new Desarrollador("Andres Mendoza", 2000000, 120000);
const Gerente1 = new Gerente("Santiago Castillo", 2000000, 5);

let mArreglo = [];

mArreglo.push(Empleado1);
mArreglo.push(Desarrollador1);
mArreglo.push(Gerente1);


mArreglo.forEach(element => {
    element.mostrarInfo();

});
Empleado1.nombre = "Jose Sipagauta"
Empleado1.salarioBase = 2500000;

Desarrollador1.nombre = "Yudy Cogaria"
Desarrollador1.bonoPorProyecto =200000;

Gerente1.nombre ="Maria Fernanda"
Gerente1._equipoACargo = 8;

mArreglo.forEach(element => {
    element.mostrarInfo();
})

