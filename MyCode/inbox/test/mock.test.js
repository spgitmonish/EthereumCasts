const assert = require('assert');
const ganache = require('ganache-cli');
// Importing a constructor function/class, hence the capitalization
const Web3 = require('web3');

// Instance of web3 with the provider i.e. the communication layer for
// the network, in this case ganache
const web3 = new Web3(ganache.provider());


// FOR UNDERSTANDING MOCHA TESTING FRAMEWORK
// Class Car
class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

// Declare a blockscope variable(visible to all modules in the scope)
let car;

// 'beforeEach' runs setup/common code before each 'it()' call
beforeEach(() => {
  car = new Car();
});

// 'describe' function is used to group a bunch of 'it' functions/statements
// NOTE: First argument is just a name for logging, second argument is an
//       arrow function
describe('Car', () => {
  // 'it' has similar arguments as 'describe'
  it('can park', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
