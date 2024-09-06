const findArmstrong = (num) => {
  const digCount = num.toString().length;
  let armstrongNum = num;
  let sum = 0;
  let lastdig;
  while (armstrongNum > 0) {
    lastdig = armstrongNum % 10;
    sum += Math.pow(lastdig, digCount);
    armstrongNum = Math.trunc(armstrongNum / 10);
  }
  console.log(sum, num);
  if (sum === num) return true;
  return false;
};

console.log(findArmstrong(153)); // true
console.log(findArmstrong(-153)); // false
console.log(findArmstrong("153")); // false
console.log(findArmstrong(0)); // true
console.log(findArmstrong(370)); // true
console.log(findArmstrong(9474)); // true
console.log(findArmstrong(123)); // false
console.log(findArmstrong(153.5)); // false
