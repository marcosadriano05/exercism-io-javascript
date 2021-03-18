/*
The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. 
The conjecture states that no matter which number you start with, you will always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.
*/

const steps = (n) => {
  if(n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  let steps = 0;
  while(n > 1) {
    if(n%2 === 0) {
      n /= 2;
      steps++;
    } else {
      n = n*3+1;
      steps++
    }
  }
  return steps;
}
