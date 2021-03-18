/*
Implement run-length encoding and decoding.

Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.

For example we can represent the original 53 characters with only 13.

"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.

"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. 
This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.
*/

const encode = (data) => {
  const spread = [...data];
  let element = spread[0];
  let count = 0;
  let repeat = 0;
  let encode = '';
  while(count < spread.length) {
    if(spread[count] === element) {
      repeat++;
      count++;
    } else {
      repeat = 0;
      element = spread[count];
    }
    if(spread[count] !== element){
      encode = [...encode, `${repeat===1 ? '' : repeat}${element}`];
    }
  }
  return encode ? encode.join('') : '';
};

const decode = (data) => {
  const spread = [...data];
  let count = 0;
  let decode = '';
  let multiplier = '';
  while(count < spread.length) {
    if(parseInt(spread[count])) {
      multiplier = [...multiplier, spread[count]];
    } else {
      multiplier = multiplier ? Number(multiplier.join('')) : 1;
      decode = [...decode, spread[count].repeat(multiplier)];
      multiplier = '';
    }
    count++;
  }
  return decode ? decode.join('') : '';
};
