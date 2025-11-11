interface ICuenta {
    titular: string;
    saldo: number;
    depositar(): number;
    retirar(): number;
}
class CuentaBancaria implements ICuenta {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }
    
depositar():number{
    let saldototal = this.saldo + 1000;
    return (saldototal)
}
retirar(): number {
    let saldototal= this.saldo-1000;
    return(saldototal)
}
}
const cuenta = new CuentaBancaria(`luz chaparro`, 2000)
console.log("depositaste 1000 y el monto actual de tu cuenta es de", cuenta.retirar());
console.log("retiraste 1000 y el monto actual de tu cuenta es de", cuenta.depositar());
