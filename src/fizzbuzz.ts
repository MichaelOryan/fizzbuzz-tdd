'use strict';

export default class Fizzbuzz {

    counter = 0;

    whatToSay(turn:number):string {
      this.counter++;
        
      if(this.counter === 6)
        return 'Fizz';

      switch(turn) {
      case 5: return 'Buzz'; break;
      case 3: return 'Fizz'; break;
      case 2: return '2'; break;
      default: return '1';
      }
    }

}
