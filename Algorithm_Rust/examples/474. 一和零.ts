interface IDp {
  m: number;
  n: number;
  count: number;
}

function findMaxForm(strs: string[], m: number, n: number): number {
  const arr = strs.map((el) => {
    let a = [0, 0];
    for (let i = 0; i < el.length; i++) {
      a[el[i]] = (a[el[i]] || 0) + 1;
    }
    return a;
  });

  const dp: IDp[] = [];
  for (let i = 0; i < arr.length; i++) {
    dp[i] = {
      m: arr[i][0],
      n: arr[i][1],
      count: 1,
    };
    for (let j = 0; j < i; j++) {
      if (
        dp[j].m + arr[i][0] < m &&
        dp[j].n + arr[i][1] < n &&
        dp[j].count + 1 > dp[i].count
      ) {
        dp[i] = {
          m: dp[j].m + arr[i][0],
          n: dp[j].n + arr[i][1],
          count: dp[j].count + 1,
        };
      }
    }
  }
  console.log(arr, dp);
  return dp[dp.length - 1].count;
}

export {};
