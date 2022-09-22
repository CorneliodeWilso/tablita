const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base, listar = false, hasta) => {
    let salida = '';
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= hasta; i++) {

            salida += ` ${base} x ${i} = ${i * base}\n`;

        }
        if (listar) {
            console.log(salida.green);
        }

        fs.writeFile('tabla.txt', salida, (error) => {
            if (error) { reject(error) } else {
                const resp = "tabla creado exitosamente"
                resolve(resp.rainbow)
            }

        })
    })


}

module.exports = {
    crearArchivo
}