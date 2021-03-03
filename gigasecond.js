const GIGASECONDS_IN_MS = Math.pow(10, 12);

function gigasecond(date) {
  return new Date(date.getTime() + GIGASECONDS_IN_MS);
}
