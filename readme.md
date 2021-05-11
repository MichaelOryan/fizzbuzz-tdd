Fizzbuzz with TDD

Primary goal to write a failing test and then write code minimal code to pass the new test as well as all old tests.

Secondary to do so by using properties of the game which can be tested for any inputed value rather than given static values.

Eg; if there are three consecutive numbers I know one and only one of them must have a response starting with Fizz.

If something is not a special turn for Fizz, Buzz or Fizzbuzz then it is the identity of the turn.

This stops a scenaro whereby I recode the solution in the test for a general n turn.

Eg; if n % 3 === 0 then expect the response to begin with Fizz. <- This is logic I may want in the solution but not in the test.

Steps are described with each commit. Normally with a test added that fails followed by a commit that adds code to pass the new failing test.

There are a few reverts and commits to fix errors in prior commits.



Brief overview of logic for tests.

Start by testing that class exists and function to call exists.

Build base cases of 1, 2, 3 and 5. 15 might also be one to establish Fizz before Buzz logic of "FizzBuzz".

Use properties of congruence such that there will be 1 beginning with Fizz every 3 turns and 1 ending with Buzz every 5 turns.

1, 2, Fizz

Buzz, Fizz, 22

13, 14, FizzBuzz, 16, 17

Fizz, Buzz, 41, Fizz, 43

Use properties of congruence such that n, n + 3 and n + 6 should all be either begin with Fizz or not.

1 => 1, 4 => 4, 7 => 7

12 => Fizz, 15 => FizzBuzz, 18 => Fizz

Use properties of congruence such that n, n + 5, n + 10, n + 15, n + 20 should all be either end with Buzz or not.

1 => 1, 6 => Fizz, 11 => 11, 16 => 16, 21 => Fizz

5 => Buzz, 10 => Buzz, 15 => FizzBuzz, 20 => Buzz, 25 => Buzz

For each of these make sure they work for the base cases which sets the mod offset of each number to mod 3 and 5.

This is so that n mod 3 === m where m is now defined. Similar for n mod 5 === m

That is 2 => Fizz when n mod 3 === 2 or 1 => Fizz when n mod 3 === 1 should be eliminated.

Use property that if something is not Fizz, Buzz or FizzBuzz then the returned value should be the identity (itself as a string) of the number passed in.


Similar tests could also be added for 15 and "FizzBuzz" so that something like "FizzPurpleMonkeyDishwasherBuzz" is an invalid response.

However mod 15 is currently covered by beginning with Fizz for mod 3, ending with Buzz for mod 5 and the number identity test which states that the only valid responses are the identity, Fizz, Buzz or FizzBuzz.


For testing of the whole game a logging function is passed in the constructor which can then be used to get the results of playing.

This is then tested against expected results from the game.
First some response.
Then 100 turns.
Then each turn is a possibly valid result. any number, fizz, buzz, fizzbuzz
Each turn is a correct response for the turn.
