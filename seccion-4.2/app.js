let nota = 100;
let letranota = ' ';
if(nota >= 90 && nota <= 100){
    letranota = 'A';
}else if(nota >= 80 && nota <= 89){
    letranota = 'B'
}else if(nota >= 70 && nota <= 79){
    letranota = 'C'
}else if(nota >= 60 && nota <= 69){
    letranota = 'D'
}
console.log(letranota);