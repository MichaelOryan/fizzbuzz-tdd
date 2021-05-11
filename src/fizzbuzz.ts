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
    for(let turn = 1; turn < 100; turn++)
      this.logger(this.whatToSay(turn));
    this.logger(this.whatToSay(100));
  }

}

type LoggerFunction = (message?: any, ...optionalParams: any[]) => void