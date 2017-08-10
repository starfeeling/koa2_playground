let assert = require('assert');
let config = require('../config');

console.log('config.port=' + config.port);

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });

        it('length', function() {
            assert.equal(3, [1, 2, 3].length);
        });
    });
});
