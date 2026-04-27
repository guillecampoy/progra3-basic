let a = 10;
let b = 3;
console.log("-=-=-=-=Calculadora simple-=-=-=-=-=-=")
console.log("Suma: ", a+b);
console.log("Resta: ", a-b);
console.log("División: ", a/b);
console.log("Multiplicación: ", a*b);
console.log("Modulo: ", a%b);

console.log("-=-=-=-=Operaciones lógicas-=-=-=-=-=-=")

let esMayor = true;
let tieneDNI = false;

console.log(esMayor && tieneDNI); // Falso
console.log(esMayor || tieneDNI); // Verdadero
console.log(!esMayor); // Falso

// operador ternario

console.log("-=-=-=-=Operador ternario-=-=-=-=-=-=")

let edadMayor = 18;
let edadMenor = 13;

let mensajePositivo = (edadMayor >= 18) ? "Puede votar" : "Es menor de edad";
let mensajeNegativo = (edadMenor >= 18) ? "Puede votar" : "Es menor de edad";

console.log(mensajePositivo)
console.log(mensajeNegativo)