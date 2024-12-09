function maxRepeating(sequence: string, word: string): number {
    let max = 0;
    // for (let i = 0; i < sequence.length; i++) {
    // if (sequence.indexOf(word) == 0) {
    max = Math.max(max, resolve(0));
    // }
    // }
    function resolve(i: number): number {
        let count = 0;
        while (i < sequence.length) {
            console.log(sequence.indexOf(word), i, sequence.indexOf(word) == i);

        }
        return count;
    }
    return max;
};

const sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
const word = "aaaba";
const res = maxRepeating(sequence, word);

console.log(res);
