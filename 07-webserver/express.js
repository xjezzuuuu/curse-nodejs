const express = require('express');
const app = express();

const port = 8080;

app.get('/', function (req, res) {
	res.send('Home page');
});

app.get('hola-mundo', function (req, res) {
	res.send('Hello World');
});

app.get('*', function (req, res) {
	res.status(404);
	res.send('404 | Page not found');
});

app.listen(port, () => {
	console.log('Server listen in the port:', port);
});
