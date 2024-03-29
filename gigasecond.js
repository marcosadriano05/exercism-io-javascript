/*
Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.

It is possible to return a correct value for this exercise by mutating the solution function argument. 
Although there are legitimate use cases for mutating function arguments, this is usually undesirable, and in the case of this exercise, clearly unexpected. 
For this reason, the test suite has a test that fails in case the argument has been modified after the function execution.
*/

const GIGASECONDS_IN_MS = Math.pow(10, 12);

function gigasecond(date) {
  return new Date(date.getTime() + GIGASECONDS_IN_MS);
}
