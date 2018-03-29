const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();

const Child = proxyquire('../lib/child', {
    './base': require('./mocks/base')
});

describe('Child tests', () => {
    it('should allow setting the Base inc() return value', () => {
        const childInstance = new Child();

        childInstance._incReturn = 4;
        expect(childInstance.inc()).to.equal(5);
    })
})