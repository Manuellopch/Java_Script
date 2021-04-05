let persona1 = {
    nombre: 'Manuel',
    edad: 22,
}
let persona2 = {
    nombre: 'Luis',
    edad: 60,
}
let persona3 = {
    nombre: 'Maritza',
    edad: 18,
}
let personas = [persona1, persona2, persona3];
for(let i = 0; i < personas.length; i++){
    let persona = personas[i];
    console.log(`${ persona.nombre } -- ${ persona.edad }`);
}
