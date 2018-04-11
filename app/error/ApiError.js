const ApiErrorNames = require('./ApiErrorNames')

class ApiError extends Error {
	constructor(errorName) {
		super()

		const errorInfo = ApiErrorNames.getErrorInfo(errorName)

		this.name = errorName
		this.code = errorInfo.code
		this.message = errorInfo.message
	}
}

module.exports = ApiError
