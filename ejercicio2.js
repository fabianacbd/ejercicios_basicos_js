const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;


// ejercicio 2

let nombre = "Leia"
let apellido = "Organa"
let edad = 20

let frase = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan."


// ejercicio 3 

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...
let shoto = 1500
let sable = 2000

let suma = shoto + sable

console.log(suma)

// ejercicio 4

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
let preciofinalnave1 = 60000

let preciofinalnave2 = 80000

let alaX = precioBaseGlobal + preciofinalnave1

let halcon = precioBaseGlobal + preciofinalnave2

console.log(alaX)
console.log(halcon)
