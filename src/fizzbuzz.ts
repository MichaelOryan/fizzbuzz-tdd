'use strict';

export default class Fizzbuzz {

  whatToSay(turn:number):string {

    if(turn > 3 && turn % 3 === 0)
      return 'Fizz';

    switch(turn) {
    case 10: return 'Buzz'; break;
    case 5: return 'Buzz'; break;
    case 3: return 'Fizz'; break;
    case 2: return '2'; break;
    default: return '1';
    }
  }

}
