const developmentEnv = require('./development')
const testEnv = require('./test')

module.exports = {
	development: developmentEnv,
	test: testEnv
}[process.env.NODE_ENV || 'development']
