'use strict';

export default class Fizzbuzz {


  whatToSay(turn:number):string {
    switch(turn) {
    case 3: return 'Fizz'; break;
    case 2: return '2'; break;
    default: return '1';
    }
  }

}
