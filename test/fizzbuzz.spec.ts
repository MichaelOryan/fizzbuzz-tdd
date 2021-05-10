import { expect } from 'chai';
import mocha from 'mocha';

import Fizzbuzz from './../src/fizzbuzz';


describe('Can import fizzbuzz', function () {
  let fizzbuzz:Fizzbuzz;
  it('Can create fizzbuzz class instance', function(){
    expect(
      fizzbuzz instanceof Fizzbuzz
    ).to.be.equal(true);
  });
});
