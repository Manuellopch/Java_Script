let carro1 = {
    marca : 'toyota',
    tipo : 'sedan',
};
let carro2 = {
    marca : 'Honda',
    tipo : 'sedan',
};
let carro3 = {
    marca : 'Mitsubishi',
    tipo : 'sedan',
};
class Carro {
    constructor (Marca, Tipo, Puertas){
        this.marca = Marca;
        this.tipo = Tipo;
        this.puertas = Puertas;
        this.creado = 'hoy';
        this.encendido = false;
        this.gasolina = 100; 
    }
    encendercarro(){
        if (this.encendido){
            console.log('El carro ya estaba encendido ..... se daño');
        }else{
        this.encendido = true;
        console.log('El carro esta encendido');
    }
    return this;
}
realizarviaje(consumo){
    if(consumo <= 0){
        return 'el carro no puede encender';
    }else if (consumo > this.gasolina){
        return 'El tanque solo aguanta 100 litros';
    }else{
    this.gasolina = this.gasolina - consumo;
    return 'Me queda en el tanque' + ' ' + this.gasolina;
}
}
}
let carro4 = new Carro('Datsun', 'sedan', 2);
console.log(carro1);//puertas : 4
console.log(carro2);
console.log(carro3);
console.log(carro4);