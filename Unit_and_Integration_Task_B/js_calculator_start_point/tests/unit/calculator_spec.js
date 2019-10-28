var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // Test for adding
  it('can add 1 and 4 for a total of 5', function() {
    calculator.previousTotal = 1;
    calculator.add(4);

    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })

  //Test for subtracting
  it('can subtract 4 from 7 for a total of 3', function() {
    calculator.previousTotal = 7
    calculator.subtract(4);

    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  //Test for multiplying
  it('can multiply 3 by 5 for a total of 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);

    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  })

  //Test for dividing
  it('can divide 21 by 7 for a total of 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);

    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  //Test for concatenating multiple number button clicks
  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);

    const actual = calculator.runningTotal;
    assert.equal(actual, 5555);
  })

  //Test for chaining multiple operations together
  it('can chain multiple operations together', function() {
    calculator.numberClick(5);
    calculator.operatorClick("+");
    calculator.numberClick(5); //5+5 = 10
    calculator.operatorClick("-");
    calculator.numberClick(5); //10-5 = 5
    calculator.operatorClick("*");
    calculator.numberClick(5); //5*5 = 25
    calculator.operatorClick("=");

    const actual = calculator.runningTotal;
    assert.equal(actual, 25);
  })

  //Test for clearing the running total
  it('can clear the funning total without affecting the calculation', function() {

    calculator.numberClick(5);
    calculator.operatorClick("+");
    calculator.numberClick(5); //5+5 = 10
    calculator.operatorClick("=");

    calculator.clearClick();

    const actual = calculator.runningTotal;
    assert.equal(actual, 0);
  })



});
