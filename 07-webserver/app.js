const hbs = require('hbs');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Configuration
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middlewares
app.use(express.static('public'));

// Routes
app.get('/', function (req, res) {
	res.render('home', {
		nombre: 'Jesus Padilla',
		title: 'Curso de NodeJS',
	});
});

app.get('/generic', function (req, res) {
	res.render('generic', {
		nombre: 'Jesus Padilla',
		title: 'Curso de NodeJS',
	});
});

app.get('/elements', function (req, res) {
	res.render('elements', {
		nombre: 'Jesus Padilla',
		title: 'Curso de NodeJS',
	});
});
app.get('*', function (req, res) {
	res.status(404);
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log('Server listen in the port:', port);
});
