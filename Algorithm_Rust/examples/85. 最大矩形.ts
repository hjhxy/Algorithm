function maximalRectangle(matrix: string[][]): number {
  let dp = Array.from({ length: matrix.length + 1 }, () => {
    return new Array(matrix[0].length + 1).fill(0);
  });

  let res = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (matrix[i - 1][j - 1] == "1") {
        if
      }
    }
  }

  return res;
}
