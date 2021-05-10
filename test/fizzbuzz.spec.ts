import { expect } from 'chai';
import mocha from 'mocha';

import Fizzbuzz from './../src/fizzbuzz';


describe('Can import fizzbuzz', function () {
  const fizzbuzz:Fizzbuzz = new Fizzbuzz();
  it('Can create fizzbuzz class instance', function(){
    expect(
      fizzbuzz instanceof Fizzbuzz
    ).to.be.equal(true);
  });
  describe('"whatToSay" function to convert number to thing to say', function () {

    it('Has "whatToSay" function', function(){
      expect(
        fizzbuzz.whatToSay
      ).to.be.a('function');
    });

    it('1 becomes 1', function(){
      expect(
        fizzbuzz.whatToSay(1)
      ).to.be.equal('1');
    });

    it('2 becomes 2', function(){
      expect(
        fizzbuzz.whatToSay(2)
      ).to.be.equal('2');
    });

    it('3 becomes Fizz', function(){
      expect(
        fizzbuzz.whatToSay(3)
      ).to.be.equal('Fizz');
    });

  });
});
