function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let map: Record<number, Array<number[]>> = {};
  let key = Infinity;
  for (let i = 1; i < arr.length; i++) {
    let k = arr[i] - arr[i - 1];
    if (!map[k]) {
      map[k] = [];
    }
    map[k].push([arr[i - 1], arr[i]]);
    key = k < key ? k : key;
  }
  return map[key];
}
