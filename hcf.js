const findGCD = (a, b) => {
  let gcd = 1;
  let i;
  for (i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return gcd;
};

// console.log(findGCD(12, 15));
// console.log(findGCD(56, 98));
// console.log(findGCD(101, 10));
// console.log(findGCD(48, 180));
// console.log(findGCD(17, 19));

// optimal approach-----------------------------------------

const optimalGCD = (a, b) => {
  if (a === 0) return b;
  else if (b === 0) return a;
  else if (a > b) return optimalGCD(a - b, b);
  return optimalGCD(a, b - a);
};

// console.log(optimalGCD(12, 15));
// console.log(optimalGCD(56, 98));
// console.log(optimalGCD(101, 10));
// console.log(optimalGCD(48, 180));
// console.log(optimalGCD(17, 19));

// --------------------------------------------------------------------
const optimalGCD2 = (a, b) => {
  if (b === 0) return a;
  return optimalGCD2(b, a % b);
};

console.log(optimalGCD2(12, 15));
console.log(optimalGCD2(56, 98));
console.log(optimalGCD2(101, 10));
console.log(optimalGCD2(48, 180));
console.log(optimalGCD2(17, 19));
