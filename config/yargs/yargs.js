const argv = require('yargs')
    .option('b', {
        alias: 'base', // con esto le decimos que podemos mandar el argumento como -b 7 o --base 6
        type: 'number', //el tipo de dato a recibir en la consola
        demandOption: true, //este parametro hace que el parametro en la consola sea obligatoria
        desc: 'numero base de la tabla de multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        desc: 'Le decimos a la app si imprimir la tabla en consola o no '

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        desc: 'limite de los multipos de la tabla de multiplicar'
    })
    .argv;


module.exports = {
    argv
}