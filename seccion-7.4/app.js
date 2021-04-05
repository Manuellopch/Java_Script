let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor  ;
let numero = 2;
for(i = 0; i <= numeros.length; i++){
    mayor = numeros[i] % numero;
    if(mayor == 0){
        console.log('el numero es par ' + numeros[i]);
    }else{
        console.log('el numero es impar ' + numeros[i]);
    }
} 