import Fizzbuzz from './fizzbuzz';

const fizzbuzz = new Fizzbuzz();

for(let turn = 1; turn <= 100; turn++)
  console.log(fizzbuzz.whatToSay(turn));