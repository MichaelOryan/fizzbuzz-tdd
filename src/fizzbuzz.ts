'use strict';

export default class Fizzbuzz {

  whatToSay(turn:number):string {

    let answer = '';

    if(turn > 3 && turn % 3 === 0)
      answer += 'Fizz';

    if(turn > 10 && turn % 5 === 0)
      answer += 'Buzz';

    if(answer !== '') return answer;

    switch(turn) {
    case 10: return 'Buzz'; break;
    case 5: return 'Buzz'; break;
    case 3: return 'Fizz'; break;
    default: return turn.toString();
    }
  }

}
