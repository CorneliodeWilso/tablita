const { bool } = require('jshint/src/options');
const { crearArchivo } = require('./helpers/crearArchivo');
const { argv } = require('./config/yargs/yargs.js')
console.log(argv);

crearArchivo(argv.b, argv.l, argv.h).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})