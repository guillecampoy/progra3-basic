console.log ("====Funciones, globales=====")

console.log(calcularArea(5,3));
console.log(calcularArea(8,4));

function calcularArea(ancho, alto) {
    const area = ancho * alto;
    return area;
};

const despedir = function() {
    console.log("Chau!!!")
};

despedir();

const saludar = function saludo() {
    console.log("Hola!")
};

saludar();

console.log ("====Arrow Funtions=====")
const obtenerFecha = () => new Date();

console.log(`Fecha actual: ${obtenerFecha()}`);

console.log ("====Funciones parámetros default=====")

function crearUsuario(nombre = "Invitado", edad = 18, activo = true) {
    return {
        nombre: nombre,
        edad: edad,
        activo: activo
    };
}

console.log ("====Usuario por defecto=====")
console.log(crearUsuario());

console.log ("====Usuario con parámetros=====")
console.log(crearUsuario("Roberto Gómez Bolaños", 56));

console.log ("====Funciones con funciones (callback)=====")

function procesarDatos(datos, callback){
    console.log("Procesando...");
    const resultado = datos.map(x => x*2);
    callback(resultado);
}

procesarDatos([1,2,3,4,5,19], (resultado) => {
    console.log("Resultado: ", resultado);
});

procesarDatos([1,2,3,4,5,19], (resultado) => {
    console.log("Suma total:", resultado.reduce((a,b) => a+b));
});

console.log ("====POO en JavaScript=====")

let persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
}

console.log(persona.nombre);
persona.saludar();

// Estructura de clase

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // función de clase
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);        
    }
}

let personaUno = new Persona("Jorge Salvador", 45);

personaUno.saludar();

// ejemplo expand
let arr1 = [1,2,3];
let arr2 = [...arr1, 4,5];
console.log(arr2);

let obj1 = {nombre: "Ana"};
let obj2 = {...obj1, edad: 25}
console.log(obj2)

// ejemplo rest

function sumar(...numeros) {
    return numeros.reduce((a,b) => a + b, 0);
}

console.log(sumar(1,2,3,5));
console.log(sumar(5,10));

// Otro ejemplo
let [primero, segundo, ...resto] = [1,2,3,4,5];

console.log(primero);
console.log(segundo);
console.log(resto);
