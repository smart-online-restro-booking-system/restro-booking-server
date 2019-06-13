const assert = require('chai').assert;
const index = require('../server');

//Testing build configuration
describe('test', () => {
    it('Should return string', () => {
        let result = 'ci with travis'
        assert.equal(result,'ci with travis');
    });
});
