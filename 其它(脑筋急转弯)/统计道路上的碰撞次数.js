function countCollisions(directions) {
    var count = 0;
    var frontStatus = '';
    for (var i = 0; i <= directions.length - 1; i++) {
        // console.log(i, directions.slice(0, i+1), count, frontStatus, directions[i]);
        if (frontStatus == 'S') {
            if (directions[i] == "L") {
                count += 1;
                frontStatus = "S";
                console.log('*', i, directions.slice(0, i + 1), count, frontStatus);
            }
            else if (directions[i] == "S") {
                frontStatus = 'S';
            }
            else {
                frontStatus = '';
            }
        }
        else {
            if (i >= 1 && directions[i - 1] == "R" && directions[i] == "L") {
                count += 2;
                frontStatus = 'S';
                console.log('=', i, directions.slice(0, i + 1), count, frontStatus);
            }
            else if (i >= 1 && directions[i - 1] == "R" && directions[i] == "S") {
                count += 1;
                frontStatus = 'S';
                console.log('-', i, directions.slice(0, i + 1), count, frontStatus);
            }
            else {
                frontStatus = '';
            }
        }
    }
    return count;
}
;
var res = countCollisions("LLRLRLLSLRLLSLSSSSLRSLLRRSSRLLSRR");
console.log(res);
