function calcularnota(nota){
let letranota = ' ';
if(nota >= 90 && nota <= 100){
    letranota = 'A';
}else if(nota >= 80 && nota <= 89){
    letranota = 'B'
}else if(nota >= 70 && nota <= 79){
    letranota = 'C'
}else if(nota >= 60 && nota <= 69){
    letranota = 'D'
}else{
    console.log('estudie mas');
}
console.log(letranota);
}
calcularnota(100);
calcularnota(80);
calcularnota(59);


