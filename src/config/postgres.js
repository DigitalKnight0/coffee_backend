const { Client } = require('pg');
const config = require('./config');
const logger = require('./logger');

let client;

(async function name() {
	client = new Client(config.sqlDB);
	//client = new Client("postgresql://coffeeadmin:b8Itx8wXUXZ7XiArYA6fd2YyxjaVXiIB@dpg-cpuki3qj1k6c738c49j0-a.oregon-postgres.render.com/coffeedb_on7y?sslmode=disable");
	try {
		await client.connect();
		logger.info('Connect to postgress sucessfully');
		return client;
	} catch (error) {
		console.log(error)
		logger.error('Connect to postgress error');
		process.exit(1);
	}
})();

module.exports = {
	postgres: client,
};
