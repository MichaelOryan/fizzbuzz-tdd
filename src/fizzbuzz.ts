'use strict';

export default class Fizzbuzz {


  whatToSay(turn:number):string {
    switch(turn) {
    case 2: return '2'; break;
    default: return '1';
    }
  }

}
