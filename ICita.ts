interface ICita{
    paciente:string;
    fecha:Date;
    mostrarResumen():string;
    calcularCosto():number;
}
class Cita implements ICita{
    private _paciente: string;
    private _medico:string;
    private _fecha: Date;
    private _valor: number;

    constructor( paciente:string, medico:string,fecha:Date,valor:number){
        this._paciente = paciente;
        this._medico = medico;
        this._fecha = fecha;
        this._valor = valor;
    }
    get paciente():string{
        return this._paciente;
    }
    set paciente(paciente: string) {
        this._paciente = paciente;
    }
    get medico():string{
        return this._medico;
    }
    set medico(medico: string) {
        this._medico = medico;
    }
    get fecha(): Date{
        return this._fecha;
    }
    set fecha(fecha:Date){
        this._fecha = fecha;
    }
    get valor():number{
        return this._valor;
    }
    set valor(valor:number){
        this._valor = valor;
    }
    public mostrarResumen(): string {
        return  `el paciente: ${this._paciente},tine cita con el Medico: ${this._medico},en la fecha: ${this._fecha},y tine un valor: ${this._valor} `;
    }
    public calcularCosto(): number{
        return this._valor;
    }
}
class CitaGeneral extends Cita{
    Copago: number;

    constructor(paciente:string,medico:string,fecha:Date,valor:number,Copago:number){
        super(paciente, medico, fecha, valor)
        this.Copago = Copago;
    }
}
class CitaEspecialista extends Cita{
    adicionalEspecialista: number;

    constructor(paciente:string,medico:string,fecha:Date,valor:number,adicionalEspecialista:number){
        super(paciente,medico,fecha,valor)
        this.adicionalEspecialista = adicionalEspecialista;
    }

} 
// class medico{
//     nombre:string;
//     especialidad:string;
//     tarifaBase:number;
//     mostrarPerfil():string;

//     constructor(nombre:string,especialista:string,tarifaBase:number){
//         this.nombre = nombre;
//         this.especialidad =especialista;
//         this.tarifaBase = tarifaBase;
//     }


// }
