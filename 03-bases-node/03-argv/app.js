
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

const [ , , arg3] = process.argv;
const [ , base] = arg3.split('=');

console.log(base);

crearArchivo(base)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))