const assert = require('assert')
const config = require('../config')

console.log(`config.port=${config.port}`)

describe('Array', () => {
	describe('#indexOf()', () => {
		it('should return -1 when the value is not present', () => {
			assert.equal(-1, [1, 2, 3].indexOf(4))
		})

		it('length', () => {
			assert.equal(3, [1, 2, 3].length)
		})
	})
})
