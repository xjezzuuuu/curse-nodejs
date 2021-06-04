const http = require('http');

http
	.createServer((req, res) => {
		// res.writeHead(200, { 'Content-Type': 'application/json' });
		res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
		res.writeHead(200, { 'Content-Type': 'application/csv' });

		// const persona = {
		// 	id: 1,
		// 	nombre: 'Jesus',
		// };

		res.write('id, nombre\n');
		res.write('1, Jesus\n');
		res.write('2, Alejandro\n');
		res.write('2, Franco\n');
		res.end();
	})
	.listen(8080);
