const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();

const MockedChild = proxyquire('./child', {
    './base': require('../test/mocks/base')
});
const Child = require('./child');

// First run the non-mocked child.
// Expected console outpt:
//   calls child inc
//   calls base inc
console.log("Non-mocked output:");
const childInstance = new Child();
expect(childInstance.inc()).to.equal(2);


console.log("");

// Run the mocked child.
// Expected console outpt:
//   calls child inc
//   calls mocked inc
console.log("mocked output:");
const childMockedInstance = new MockedChild();
childMockedInstance._incReturn = 4;
expect(childMockedInstance.inc()).to.equal(5);