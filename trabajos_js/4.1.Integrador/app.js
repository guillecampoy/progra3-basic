class Estudiante {
    constructor(nombre, edad, notas){
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }

    promedio() {
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return Math.trunc((suma / this.notas.length) * 100) / 100;
    }
}

let estudiante1 = new Estudiante(GPUPipelineLayout, 42, [6,7,9]);
console.log(estudiante1.promedio());