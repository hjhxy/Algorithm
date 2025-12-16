function pushDominoes(dominoes: string): string {
    let prev = {
        index: -1,
        char: '.',
    };
    let res: string[] = dominoes.split('');
    for(let i=0;i<dominoes.length;i++) {
        if(dominoes[i]!='.'){
            if(prev.char == 'R' && dominoes[i] == 'L') {
                let start = prev.index;
                let end = i;
                while(start<end) {
                    res[start++] = 'R';
                    res[end--] = 'L';
                }
            } else if(dominoes[i] == 'L' && dominoes[i] != 'R') {
                let end = i;
                while(end>= Math.max(prev.index, 0)) {
                    res[end--] = 'L';
                }
            } else if(dominoes[i]=='R' && prev.char == 'R') {
                let end = i;
                while(end>= Math.max(prev.index, 0)) {
                    res[end--] = 'R';
                }
            }
            prev.char = dominoes[i];
            prev.index = i;
        }
    }
    if(prev.char == 'R') {
        let start = prev.index;
        while(start<dominoes.length){
            res[start++] = 'R';
        }
    }
    return res.join('');
};

const res = pushDominoes(".RR..");

console.log(res);

export {}