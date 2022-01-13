var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
	if (err) {
		console.log(err.message);
		throw err
	} else {
		console.log('Connected to the SQLite database.')
		db.run(`CREATE TABLE inventory (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title text
			)`,
		(err) => {
			if (err) {
				// Table already created
			} else {
				db.run('INSERT INTO inventory (title) VALUES ("Fidget spinner")')
			}
		});
	}
})

module.exports = db
