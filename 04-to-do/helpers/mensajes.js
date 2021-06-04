const { read } = require('fs');
const { resolve } = require('path');

require('colors');

const monstrarMenu = () => {
	return new Promise((res, rej) => {
		console.clear();
		console.log('========================='.green);
		console.log('  Seleccione una opcion  '.green);
		console.log('========================='.green);

		console.log(`${'1.'.green} Crear tareas`);
		console.log(`${'2.'.green} Listar tareas`);
		console.log(`${'3.'.green} Listar tareas completadas`);
		console.log(`${'4.'.green} Listar tareas pendientes`);
		console.log(`${'5.'.green} Completar tarea(s)`);
		console.log(`${'6.'.green} Borrar tarea`);
		console.log(`${'0.'.green} Salir\n`);

		const readLine = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readLine.question('Seleccione una opción: ', (opt) => {
			readLine.close();
			res(opt);
		});
	});
};

const pausa = () => {
	return new Promise((res, rej) => {
		const readLine = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		readLine.question(`Presione ${'\nENTER'.green} para continuar`, (opt) => {
			readLine.close();
			res();
		});
	});
};

module.exports = { monstrarMenu, pausa };
