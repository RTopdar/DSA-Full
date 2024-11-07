const rightShift = (array, index = 2) => {
  array.push(null);
  for (let i = array.length - 1; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = null;
  return array;
};

module.exports = { rightShift };
