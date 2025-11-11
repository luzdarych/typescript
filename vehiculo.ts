interface IVehiculo {
  marca: string;
  modelo: string;
  acelerar(): void;
  frenar():void;
}
class carro implements IVehiculo{
 marca: string;
 modelo: string;

constructor(marca: string, modelo: string){
  this.marca = marca;
  this.modelo = modelo;
}
acelerar(): void {
  console.log(`El coche ${this.marca} esta acelerando`);
}
frenar(): void {
  console.log(`El coche ${this.marca} esta frenando`);
}
}
const carro1 = new carro(`BMW`,"2006");
carro1.acelerar();
carro1.frenar();

