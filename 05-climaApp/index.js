const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
	const busquedas = new Busquedas();
	let opt;

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				// Mostrar mensaje
				const termino = await leerInput('Ciudad: ');

				// Buscar ciudad
				const lugares = await busquedas.ciudad(termino);

				// Seleccionar lugar
				const id = await listarLugares(lugares);
				if (id === '0') continue;

				const { nombre, lat, lon } = lugares.find((lugar) => lugar.id === id);

				// Guardar DB
				busquedas.agregarHistorial(nombre);

				// Clima
				const { desc, temp, min, max } = await busquedas.climaLugar(lat, lon);

				// Mostrar Resultados

				console.log('\nInformacion de la ciudad\n'.green);
				console.log('Ciudad: ', nombre.green);
				console.log('Lat: ', lat);
				console.log('Lon:', lon);
				console.log('Temperatura: ', temp);
				console.log('Min: ', min);
				console.log('Max: ', max);
				console.log('Como esta el clima: ', desc.green);
				break;
			case 2:
				busquedas.historialCapitalizado.forEach((lugar, i) => {
					const idx = `${i + 1}.`.green;
					console.log(`${idx} ${lugar}`);
				});
				break;
			default:
				break;
		}

		if (opt !== 0) await pausa();
	} while (opt !== 0);
};

main();
