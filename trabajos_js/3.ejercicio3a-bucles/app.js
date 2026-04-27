
console.log ("====Condcionales, ejemplo notas=====")
let nota = 7

console.log("Nota inicial", nota)

if (nota >= 9) {
    console.log("Exelente");
} else if (nota >= 6){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

console.log ("====Switch, ejemplo dias semana=====");

let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Maartes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.log("Día inválido");
}

console.log ("====Uso ciclo FOR, iteración controlada=====");

for (let i = 0; i < 5; i++) {
    console.log("Iteración: "+i);
}

console.log ("====Uso ciclo WHILE, iteración con bandera=====");

let n = 1;

while (n <= 3) {
    console.log("Número: ", n);
    n++;
}

console.log ("====Uso ciclo DO-WHILE, iteración con bandera=====");

let x = 1;
do {
    console.log("Ejecutando ciclo: "+x)
    x++;
}while (x <=3)

console.log ("====Uso de. FOR-EACH=====");

let numeros = [1,2,3];

numeros.forEach((num, i) => {
    console.log(`Posición ${i} ${num * 2}`);
});
