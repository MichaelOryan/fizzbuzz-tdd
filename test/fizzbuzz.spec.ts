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
    describe('Fizz', function () {

      it('Three numbers in a row should only produce only one result starting with Fizz', function(){
        const startingNumber = 4;
        let fizzCount = 0;
        for(let count = 0; count < 3; count++) 
          fizzCount += fizzbuzz.whatToSay(startingNumber + count).startsWith('Fizz') ? 1 : 0;

        expect(
          fizzCount
        ).to.be.equal(1);
      });


      it('Three numbers in a row should only produce only one result starting with Fizz. Random starting number', function(){
        const startingNumber = Math.floor(Math.random() * 100) + 1;
        let fizzCount = 0;
        for(let count = 0; count < 3; count++) 
          fizzCount += fizzbuzz.whatToSay(startingNumber + count).startsWith('Fizz') ? 1 : 0;

        expect(
          fizzCount
        ).to.be.equal(1);
      });


      it('Any three numbers n, n+3, n+6 should all or none start with Fizz.', function(){
        const randomStartingNumber = Math.floor(Math.random() * 100) + 1;
        for(let startingNumber = randomStartingNumber; startingNumber < randomStartingNumber + 20; startingNumber++) {
          let fizzCount = 0;
          for(let count = 0; count < 3; count++) 
            fizzCount += fizzbuzz.whatToSay(startingNumber + (count * 3)).startsWith('Fizz') ? 1 : 0;
          expect(
            fizzCount
          ).to.be.oneOf([0, 3]);  
        }
      });

      it('Any three numbers n, n+3, n+6 should all or none start with Fizz. Start @ 1', function(){
        const randomStartingNumber = 1;
        for(let startingNumber = randomStartingNumber; startingNumber < randomStartingNumber + 20; startingNumber++) {
          let fizzCount = 0;
          for(let count = 0; count < 3; count++) 
            fizzCount += fizzbuzz.whatToSay(startingNumber + (count * 3)).startsWith('Fizz') ? 1 : 0;
          expect(
            fizzCount
          ).to.be.oneOf([0, 3]);  
        }
      });
    });
    
    describe('Buzz', function () {
      it('5 becomes Buzz', function(){
        expect(
          fizzbuzz.whatToSay(5)
        ).to.be.equal('Buzz');
      });

    });

  });
});
