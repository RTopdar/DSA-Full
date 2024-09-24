let matrix = [
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
];

const expectedOutput = [];

const rows = new Set();
const cols = new Set();

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] === 0) {
      rows.add(i);
      cols.add(j);
    }
  }
}

const rowArray = Array.from(rows);
const colArray = Array.from(cols);


for (let i = 0; i < rowArray.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[rowArray[i]][j] = 0;
  }
}

for (let i = 0; i < colArray.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][colArray[i]] = 0;
  }
}

console.table(matrix);
