const argv = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'Es la base de la tabla de multiplicacion',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if( isNaN(argv.b)) throw 'La base debe ser un valor numerico';
        return true;
    })
    .option('l', {
        alias: 'listar',
        describe: 'Muestra la tabla en consola',
        type: 'boolean',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        describe: 'Es la cantidad de veces que se va iterar la multiplicacion',
        type: 'number',
        demandOption: true,
        default: 10
    })
    .argv

    module.exports = argv;