function maxRepeating(sequence, word) {
    var max = 0;
    // for (let i = 0; i < sequence.length; i++) {
    // if (sequence.indexOf(word) == 0) {
    max = Math.max(max, resolve(0));
    // }
    // }
    function resolve(i) {
        var count = 0;
        while (i < sequence.length) {
            console.log(sequence.indexOf(word), i, sequence.indexOf(word) == i);
            if (sequence.indexOf(word) == i) {
                i += word.length;
                console.log('i', i);
                count++;
            }
            else {
                break;
            }
        }
        return count;
    }
    return max;
}
;
var sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
var word = "aaaba";
var res = maxRepeating(sequence, word);
console.log(res);
