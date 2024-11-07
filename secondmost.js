const findsecond = (array) => {
  let smallest = Math.max(...array);
  let largest = Math.min(...array);
  let secondSmallest = Math.max(...array);
  let secondLargest = Math.min(...array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > secondLargest) {
      //if the current element is greater than the second largest element
      if (array[i] > largest) {
        // check if the current elemnent is greater than the largest element
        secondLargest = largest; // we replace second largest with the previous value
        largest = array[i]; // we update largest
      } else {
        secondLargest = array[i]; // it means the current element is larger than the second largest element but not larger than the largest element. so it replacees the second largest element
      }
    }
    if (array[i] < secondSmallest) {
      if (array[i] < smallest) {
        secondSmallest = smallest;
        smallest = array[i];
      } else {
        secondSmallest = array[i];
      }
    }
  }
  return {
    Smallest: smallest,
    Largest: largest,
    "Second Smallest": secondSmallest,
    "Second Largest": secondLargest,
  };
};

console.log(findsecond([9, 3, 7, 5, 6, 4, 1, 8, 2]));
