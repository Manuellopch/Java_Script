function masLargo(arr){
let nombrelargo = ' ';
for(let i = 0; i < arr.length; i++){
    let nombre = arr[i];
    if(nombre.length > nombrelargo.length){
           nombrelargo = nombre;
    }
}
return nombrelargo;
}
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroeLargo = masLargo( heroes );
console.log(heroeLargo);