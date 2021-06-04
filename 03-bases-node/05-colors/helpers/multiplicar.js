const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar) => {
    try {    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log('================='.green);
            console.log(`   Tabla del ${colors.blue(base)}   `.green);
            console.log('================='.green);

            console.log(salida);
        }        
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);                                                                                                                                                                                                                      
        
        return `tabla-${base}.txt creado!`;
    } catch (err) {
        throw err
    }
}

module.exports = {crearArchivo}