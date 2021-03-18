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
