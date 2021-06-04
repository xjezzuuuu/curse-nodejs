const argv = require('./config/yargs')
const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs = ',argv.base);

crearArchivo(argv.base, argv.listar)
    .then(msg => console.log(msg.rainbow))
    .catch(err => console.log(err))