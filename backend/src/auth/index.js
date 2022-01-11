const jwt = require('jsonwebtoken');

async function privateRouteMidd (req, res, next) {
	try {
		const { authorization } = req.headers;
		const [ , token ] = authorization.split('Bearer ');
		console.log(token);
		const decoded = jwt.verify(token, process.env.SECRET);

		req.auth = decoded;

		next();
	} catch (e) {
		next(e);
	}
}

module.exports = {
	privateRouteMidd
}
