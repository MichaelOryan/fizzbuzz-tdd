'use strict';

export default class Fizzbuzz {

  whatToSay(turn:number):string {

    let answer = '';

    if(turn % 3 === 0)
      answer += 'Fizz';

    if(&& turn % 5 === 1)
      answer += 'Buzz';

    if(answer !== '') return answer;

    switch(turn) {
    default: return turn.toString();
    }
  }

}
