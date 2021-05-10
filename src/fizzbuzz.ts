'use strict';

export default class Fizzbuzz {

  logger:LoggerFunction;

  constructor(logger:LoggerFunction = console.log) {
    this.logger = logger;
  }

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

  play():void {
    return;
  }

}

type LoggerFunction = (message?: any, ...optionalParams: any[]) => void