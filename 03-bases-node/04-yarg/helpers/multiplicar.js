const fs = require('fs');

const crearArchivo = async(base, listar) => {
    try {    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log('=================');
            console.log(`   Tabla del ${base}   `);
            console.log('=================');

            console.log(salida);
        }        
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);                                                                                                                                                                                                                      
        
        return `tabla-${base}.txt creado!`;
    } catch (err) {
        throw err
    }
}

module.exports = {crearArchivo}