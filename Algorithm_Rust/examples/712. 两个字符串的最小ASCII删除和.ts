function minimumDeleteSum(s1: string, s2: string): number {
  let sum = (s1 + s2).split("").reduce((sum, el) => {
    return sum + el.charCodeAt(0);
  }, 0);
  let dp: number[][] = Array.from({ length: s1.length + 1 }, () =>
    new Array(s2.length + 1).fill(0)
  );
  let max = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      let mid_max = 0;
      for (let k = 0; k < j; k++) {
        mid_max = Math.max(mid_max, dp[i][k]);
      }
      if (s1[i - 1] == s2[j - 1]) {
        console.log(s1[i - 1]);
        dp[i][j] = Math.max(dp[i][j], mid_max + dp[i - 1][j]);
      } else {
        dp[i][j] = mid_max;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  console.log(dp, sum, max);
  return sum - max * 2;
}
