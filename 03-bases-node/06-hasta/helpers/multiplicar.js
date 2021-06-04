const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar, hasta) => {
    try {    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log('================='.green);
            console.log(`   Tabla del ${colors.blue(base)}   `.green);
            console.log('================='.green);

            console.log(consola);
        }        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);                                                                                                                                                                                                                      
        
        return `tabla-${base}.txt creado!`;
    } catch (err) {
        throw err
    }
}

module.exports = {crearArchivo}