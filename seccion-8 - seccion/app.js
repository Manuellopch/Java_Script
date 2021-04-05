function filtrarPorLetra(arr, letra){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
         let nombre = arr[i];
         if(nombre[0] == letra){
             newArr.push(nombre);
         }
    }
    return newArr;
}
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra( heroes, 'H');
console.log( heroesCon ); // She Hulk, Spiderman