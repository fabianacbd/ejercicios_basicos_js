const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
}

for (const clave in alien) {
    console.log("La propiedad " + clave + " tiene como valor: " + alien[clave] )
    }
