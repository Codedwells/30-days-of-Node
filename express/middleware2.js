const authorize = (req, res, next) => {
	console.log("Authorized///");
	next();
};

module.exports = authorize;
