/*
Write a function to convert from normal numbers to Roman Numerals.

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. 
One thing they never discovered though was the number zero. 
This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. 
For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

 1  => I
10  => X
 7  => VII
There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990.

In Roman numerals 1990 is MCMXC:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII
*/

const numbers = [
  [1, "I"], [4, "IV"], [5, "V"], [9, "IX"],
  [10, "X"], [40, "XL"], [50, "L"], [90, "XC"],
  [100, "C"], [400, "CD"], [500, "D"], [900, "CM"],
  [1000, "M"]
];

function verifier(number) {
  for(let i=numbers.length-1; i>=0; i--) {
    if(numbers[i][0] <= number) return numbers[i];
  }
}

const toRoman = (number) => {
  let romanNumber = '';
  let current;
  while(number > 0) {
    current = verifier(number);
    romanNumber += current[1];
    number -= current[0];
  }
  return romanNumber;
}
