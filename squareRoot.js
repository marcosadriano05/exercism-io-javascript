/*
Given a natural radicand, return its square root.

Note that the term "radicand" refers to the number for which the root is to be determined. That is, it is the number under the root symbol.

Check out the Wikipedia pages on square root and methods of computing square roots.

Recall also that natural numbers are positive real whole numbers (i.e. 1, 2, 3 and up).

The idea is not to use the built-in javascript functions such as Math.sqrt(x), x ** 0.5 or x ** (1/2), it's to build your own.
*/

const squareRoot = (number) => {
  if(number === 0) return 0;
  let x;
  let xn = number/2;
  let precision = 1;
  while(precision > 0.01) {
    x = xn;
    xn = (x + (number/x))/2
    precision = xn-x;
    if(precision < 0) precision *= -1;
    console.log(precision);
  }
  return Math.floor(xn);
}
