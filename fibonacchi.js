let array = [0];

const recursor = (first, second, limit) => {
  if (limit <= 1) return array;
  array.push(first + second);
  return recursor(second, first + second, limit - 1);
};
const fibonacciPrinter = (limit) => {
  array = [0];
  return recursor(0, 1, limit - 1);
};

// Test case 1: Zero limit
console.log("Test 1: ", fibonacciPrinter(0)); // Expected: [0]

// Test case 2: Limit of 1
console.log("Test2: ", fibonacciPrinter(1)); // Expected: [0]

// Test case 3: Limit of 2
console.log("Test 3: ", fibonacciPrinter(2)); // Expected: [0, 1]

// Test case 4: Limit of 5
console.log("Test 4: ", fibonacciPrinter(5)); // Expected: [0, 1, 1, 2, 3]

// Test case 5: Limit of 10
console.log("Test 5: ", fibonacciPrinter(10)); // Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Test case 6: Negative limit
console.log("Test 6: ", fibonacciPrinter(-1)); // Expected: [0] (or handle negative input appropriately)

// Test case 7: Limit of 20
console.log("Test 7: ", fibonacciPrinter(20)); // Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., 4181]

// Test case 8: Limit of 3
console.log("Test 8: ", fibonacciPrinter(3)); // Expected: [0, 1, 1]
