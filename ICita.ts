interface ICita {
    paciente: string;
    fecha: Date;
    mostrarResumen(paciente: string, medico:string, fecha: Date, valor: number): string;
    calcularCosto(): number;
}
// clase principal
class Cita implements ICita {
    private _paciente: string;
    private _medico: string;
    private _fecha: Date;
    private _valor: number;
// el costructor es el que recibe los datos
    constructor(paciente: string, medico: string, fecha: Date, valor: number) {
        this._paciente = paciente;
        this._medico = medico;
        this._fecha = fecha;
        this._valor = valor;
    }
    // se usan para poder manejar los datos privados o protegidos 
    get paciente(): string {
        return this._paciente;
    }
    set paciente(paciente: string) {
        this._paciente = paciente;
    }
    get medico(): string {
        return this._medico;
    }
    set medico(medico: string) {
        this._medico = medico;
    }
    get fecha(): Date {
        return this._fecha;
    }
    set fecha(fecha: Date) {
        this._fecha = fecha;
    }
    get valor(): number {
        return this._valor;
    }
    set valor(valor: number) {
        this._valor = valor;
    }
    // este es el metodo que se va ha reutilizar por eso lo llene entre las ()
    public mostrarResumen(paciente: string, medico:string, fecha: Date, valor: number): string {
        return `el paciente: ${paciente},tine cita con el Medico: ${medico},en la fecha: ${fecha},y tine un valor: ${valor} `;
    }
    public calcularCosto(): number {
        return this._valor;
    }
}
// clase hija 
class CitaGeneral extends Cita {
    Copago: number;

    constructor(paciente: string, medico: string, fecha: Date, valor: number, Copago: number) {
        super(paciente, medico, fecha, valor);
        this.Copago = Copago;
    }
// metodo que estoy reutilizando 
    reutizarMetMostrarResumen(){    
        return super.mostrarResumen(this.paciente, this.medico, this.fecha, this.valor + this.Copago);
    }
}
class CitaEspecialista extends Cita {
    adicionalEspecialista: number;

    constructor(paciente: string, medico: string, fecha: Date, valor: number, adicionalEspecialista: number) {
        super(paciente, medico, fecha, valor)
        this.adicionalEspecialista = adicionalEspecialista;
    }

    reutizarMetMostrarResumen(){
        return super.mostrarResumen(this.paciente, this.medico, this.fecha, this.valor + this.adicionalEspecialista);
    }

}
// clase adicional
class medico {
    nombre: string;
    especialidad: string;
    tarifaBase: number;
    // mostrarPerfil(): string;

    constructor(nombre: string, especialista: string, tarifaBase: number) {
        this.nombre = nombre;
        this.especialidad = especialista;
        this.tarifaBase = tarifaBase;
    }
    public mostrarPerfil(): string {
        return `el medico ${this.nombre} de la especialidad ${this.especialidad} maneja una tarifa de ${this.tarifaBase}`
    }

}
// es donde creo los objetos 
const cita1 = new Cita("Erika Bautista", "Yudy Cogaria", new Date, 7000);
const citaGeneral1 = new CitaGeneral("Santiago Castillo", "Jose Velez", new Date, 7000, 4200);
const CitaEspecialista1 = new CitaEspecialista("Maria Plazas", "Juan Puerto", new Date, 7000, 10000);
const medico1 = new medico("Jose Cipagauta","Psiquiatra",10000);

// es el arreglo
let miArregloCitas = [];
let miArregloCitasGenEsp = [];
let miArregloMedicos = [];
miArregloCitas.push(cita1);
miArregloCitasGenEsp.push(citaGeneral1);
miArregloCitasGenEsp.push(CitaEspecialista1);
miArregloMedicos.push(medico1);

// aca recorro el arreglo
miArregloCitas.forEach(element => {
    console.log(element.mostrarResumen(cita1.paciente, cita1.medico, cita1.fecha, cita1.valor));
});

miArregloCitasGenEsp.forEach(element => {
    console.log(element.reutizarMetMostrarResumen());
});

miArregloMedicos.forEach(element => {
    console.log(element.mostrarPerfil());
});
