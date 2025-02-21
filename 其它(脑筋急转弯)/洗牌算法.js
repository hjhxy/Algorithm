function xipai(arr) {
    var res = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        var index = Math.floor(Math.random() * arr.length);
        while (res[index] !== undefined) {
            index = (index + 1) % arr.length;
        }
        // console.log(index, res);
        res[index] = arr[i];
    }
    return res;
}
var res = xipai([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);
