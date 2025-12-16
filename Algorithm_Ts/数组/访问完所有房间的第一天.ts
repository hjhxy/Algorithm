function firstDayBeenInAllRooms(nextVisit: number[]): number {
    let count = 0;
    let hashTable = {};
    let res = 0;
    let nextroom = 0;
    while(count!==nextVisit.length){
        let room = nextroom;
        if(hashTable[room]==undefined){
            hashTable[room] = 1;
            count++; // 第一次访问
        } else {
            hashTable[room]++;
        }
        if(hashTable[room]%2==0){
            nextroom = (nextroom+1)%nextVisit.length;
        } else {
            nextroom = nextVisit[nextroom];
        }
        res++;
    }
    return (res-1)%(Math.pow(10, 9)+7);
};

const res = firstDayBeenInAllRooms([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
console.log(res);


export {}