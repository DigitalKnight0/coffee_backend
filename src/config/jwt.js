const expressJwt = require('express-jwt');
const config = require('./config.js');

async function isRevoked(_req, _payload, done) {
	done();
}

function jwt() {
	const { secret } = config.jwt;
	return expressJwt({
		secret,
		getToken: function fromHeaderOrQuerystring(req) {
			const token = req.headers.authorization
				? req.headers.authorization.split(' ')[1]
				: req.query.token;
			if (token) return token;
			return null;
		},
		algorithms: ['HS256'],
		isRevoked,
	}).unless({
		path: [
			// public routes that don't require authentication
			/\/v[1-9](\d)*\/(auth|docs|farmers)\/.*/,
			'/v1/farmers',
			'/v1/farmers/:farmerId',
			'/v1/plants',
			'/v1/plants/:plantId',
			'/v1/exports',
			'/v1/exports/:exportId',
			'/v1/imports',
			'/v1/imports/:importId',
			'/v1/logistics',
			'/v1/logistics/:logisticsId',
			'/v1/warehouses',
			'/v1/warehouses/:warehouseId',
			'/v1/suppliers',
			'/v1/suppliers/:supplierId',
			'/v1/textiles',
			'/v1/textiles/:textileId',
			'/v1/customers',
			'/v1/customers/:customerId',
		],
	});
}

module.exports = jwt;
