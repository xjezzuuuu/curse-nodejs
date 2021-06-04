
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

const base = 5;

crearArchivo(base)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))