function minSetSize(arr) {
    var hash = {};
    for (var i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]] += 1;
        }
        else {
            hash[arr[i]] = 1;
        }
    }
    // const arr1 = Object.values(hash).sort((a,b)=>(b-a));
    var arr1 = [];
    for (var key in hash) {
        arr1.push(hash[key]);
    }
    arr1.sort(function (a, b) { return (b - a); });
    var res = 0;
    var sum = 0;
    while (sum < arr.length / 2) {
        sum += arr1[res];
        res++;
    }
    console.log(arr1, res);
    return res;
}
;
var res = minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]);
console.log(res);
