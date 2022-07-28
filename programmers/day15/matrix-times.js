// n * n 정사각 행렬의 곱셈 연산 구현

const matrix = (a, b) => {
  let result = [];
  let row = [];
  let tem = 0;
  // result.ik = a.ik * b.ki
  for (i = 0; i < a.length; i++) {
    row = [];
    for (j = 0; j < a.length; j++) {
      tem = 0;
      for (let x = 0; x < a.length; x++) {
        tem = tem + a[i][x] * b[x][j];
      }
      row.push(tem);
    }
    result.push(row);
  }
  return result;
};

console.log(
  matrix(
    [
      [1, 3],
      [4, 5],
    ],
    [
      [9, 4],
      [5, 3],
    ]
  )
);
