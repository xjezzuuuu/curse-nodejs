const Tarea = require('./Tarea');

module.exports = class Tareas {
	_listado = {};

	get listadoArr() {
		const listado = [];

		Object.keys(this._listado).forEach((key) => {
			const tarea = this._listado[key];
			listado.push(tarea);
		});

		return listado;
	}

	constructor() {
		this._listado = {};
	}

	cargarTareasFromArray(tareas = []) {
		tareas.forEach((tarea) => {
			this._listado[tarea.id] = tarea;
		});
	}

	listadoCompleto() {
		console.log();
		this.listadoArr.forEach((tarea, i) => {
			const idx = `${i + 1}`;
			const { desc, completadoEl } = tarea;
			const estado = completadoEl ? 'Completado'.green : 'Pendiente'.red;
			console.log(`${(idx + '.').green} ${desc} :: ${estado}`);
		});
	}

	listarPendientesCompletadas(completadas = true) {
		let contador = 0;
		this.listadoArr.forEach((tarea) => {
			const { desc, completadoEl } = tarea;
			const estado = completadoEl ? 'Completado'.green : 'Pendiente'.red;

			if (completadas) {
				if (completadoEl) {
					contador += 1;
					console.log(`${(contador + '.').green} ${desc} :: ${(completadoEl + '').green}`);
				}
			} else {
				if (!completadoEl) {
					contador += 1;
					console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
				}
			}
		});
	}

	crearTarea(desc = '') {
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}

	borrarTarea(id = '') {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}

	toggleCompletadas(ids = []) {
		ids.forEach((id) => {
			const tarea = this._listado[id];
			if (!tarea.completadoEl) {
				tarea.completadoEl = new Date().toISOString();
			}
		});

		this.listadoArr.forEach((tarea) => {
			if (!ids.includes(tarea.id)) {
				this._listado[tarea.id].completadoEl = null;
			}
		});
	}
};
