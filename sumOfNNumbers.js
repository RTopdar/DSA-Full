const nsum = (num) => {
  if (num === 0) return num;
  return num + nsum(num - 1);
};

console.log(nsum(10));
