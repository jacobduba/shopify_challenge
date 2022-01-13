var express = require('express')
var bodyParser = require('body-parser')
var CsvParser = require('json2csv').Parser

var app = express()
var db = require('./database.js')

var PORT = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	db.all('SELECT * FROM inventory', (err, rows) => {
		if (err) {
			next(err)
		} else { 
			res.render('index', { items: rows })
		}
	})
})

app.post('/create_new', (req, res) => {
	db.run('INSERT INTO inventory (title) VALUES (?)', req.body.name_field);
	res.redirect('/')
});

app.get('/delete/:id', (req, res) => {
	db.run('DELETE FROM inventory WHERE id=(?)', req.params.id)
	res.redirect('/')
});

app.get('/edit/:id', (req, res) => {
	res.render('edit', { id: req.params.id })
})

app.post('/edit/:id', (req, res) => {
	db.run('UPDATE inventory SET title=? WHERE id=?', req.body.name_field, req.params.id);
	res.redirect('/');
})

app.get('/csv', (req, res) => {
	db.all('SELECT * FROM inventory', (err, rows) => {
		if (err) {
			next(err)
		} else {
			var csvParser = new CsvParser()
			var csvData = csvParser.parse(rows)

			res.setHeader('Content-Type', 'text/cvs')
			res.setHeader('Content-Disposition', 'attachment: filename=inventory.csv')

			res.end(csvData)
		}
	})
})

app.listen(PORT, () => {
	console.log('App is listening at http://localhost:' + PORT)
})
