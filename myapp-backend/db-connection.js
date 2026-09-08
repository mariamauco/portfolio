const { Pool } = require('pg');

const pool = new Pool({
	host: process.env.POSTGRES_HOST || 'localhost',
	port: Number(process.env.POSTGRES_PORT || 3100),
	user: process.env.POSTGRES_USER || 'maria',
	password: process.env.POSTGRES_PASSWORD || 'password',
	database: process.env.POSTGRES_DB || 'portfolio'
});

module.exports = pool;
