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
    .argv

    module.exports = argv;