const argv = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs = ',argv.base);

crearArchivo(argv.base, argv.listar)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))