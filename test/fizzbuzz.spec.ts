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

      it('Five numbers in a row should only produce only one result ending with Buzz', function(){
        const startingNumber = 6;
        let fizzCount = 0;
        for(let count = 0; count < 5; count++) 
          fizzCount += fizzbuzz.whatToSay(startingNumber + count).endsWith('Buzz') ? 1 : 0;

        expect(
          fizzCount
        ).to.be.equal(1);
      });

      it('Five numbers in a row should only produce only one result ending with Buzz. Random starting number', function(){
        const randomStartingNumber = Math.floor(Math.random() * 100) + 10;
        for(let startingNumber = randomStartingNumber; startingNumber < randomStartingNumber + 100; startingNumber++) {
          let fizzCount = 0;
          for(let count = 0; count < 5; count++) 
            fizzCount += fizzbuzz.whatToSay(startingNumber + count).endsWith('Buzz') ? 1 : 0;

          expect(
            fizzCount
          ).to.be.equal(1);
        }
      });

      it('Any five numbers n, n+5, n+10, n+15, n+20 should all or none end with Buzz. Start @ 1', function(){
        const randomStartingNumber = 1;
        for(let startingNumber = randomStartingNumber; startingNumber < randomStartingNumber + 100; startingNumber++) {
          let fizzCount = 0;
          for(let count = 0; count < 5; count++) 
            fizzCount += fizzbuzz.whatToSay(startingNumber + (count * 5)).endsWith('Buzz') ? 1 : 0;
          expect(
            fizzCount
          ).to.be.oneOf([0, 5]);
        }
      });


    });

    describe('Numbers', function () {
      it('Anything that is not Fizz, Buzz or FizzBuzz should be the same as the number inputed. Identity', function(){
        const randomStartingNumber = Math.floor(Math.random() * 100) + 10;
        for(let turn = randomStartingNumber; turn < randomStartingNumber + 100; turn++) {
          expect(
            fizzbuzz.whatToSay(turn)
          ).to.be.oneOf([turn.toString(), 'Fizz', 'Buzz', 'FizzBuzz']);
        }
      });
    });

  });

  describe('Console output/Playing 1 to 100 game tests', function () {
    describe('Can give parameter to constructor', function () {
      let output = '';
      const log = (message?: any, ...optionalParams: any[]) => output += ((output === '') ? message : '\n' + message);
      const fizzbuzz = new Fizzbuzz(log);

      it('"play" function to play game"', function(){
        expect(
          fizzbuzz.play
        ).to.be.a('function');

      });

      it('"play" logs a string/game to logger', function(){
        output = '';
        fizzbuzz.play();
        expect(
          output
        ).to.be.a('string').and.lengthOf.greaterThan(0);

      });

      it('"play" logs 100 lines/turns to logger', function(){
        output = '';
        fizzbuzz.play();
        expect(
          output.split('\n')
        ).to.be.an('array').and.lengthOf(100);

      });

      it('Each logged line is an integer, Fizz, Buzz or FizzBuzz', function(){
        output = '';
        fizzbuzz.play();
        expect(
          output.split('\n').filter(line => ['Fizz', 'Buzz', 'FizzBuzz'].includes(line) || Number.isInteger(Number(line)))
        ).to.be.an('array').and.lengthOf(100);
      });

      it('Each line should match whatToSay(turn) (turn = index + 1). ie; is the correct answer for the turn', function(){
        output = '';
        fizzbuzz.play();
        expect(
          output.split('\n').filter((line, index) => fizzbuzz.whatToSay(index + 1) === line)
        ).to.be.an('array').and.lengthOf(100);
      });

    });


  });
});
