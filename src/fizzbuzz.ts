'use strict';

export default class Fizzbuzz {

  whatToSay(turn:number):string {

    let answer = '';

    if(turn % 3 === 0)
      answer += 'Fizz';

    if(turn % 5 === 0)
      answer += 'Buzz';

    if(answer === '') 
      answer = turn.toString();

    return answer;
  }

}
