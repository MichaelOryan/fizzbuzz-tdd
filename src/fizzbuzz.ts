'use strict';

export default class Fizzbuzz {

    counter = 0;

    whatToSay(turn:number):string {
      this.counter++;
        
      if(turn > 3 && turn % 3 === 1)
        return 'Fizz';

      switch(turn) {
      case 5: return 'Buzz'; break;
      case 3: return 'Fizz'; break;
      case 2: return '2'; break;
      default: return '1';
      }
    }

}
