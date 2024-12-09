function networkDelayTime(times: number[][], n: number, k: number): number {
    interface INode {
        data: number[][];
        distance: number,
        color: 'white' | 'gray' | 'black'
    }
    interface IMap {
        [key: number]: INode
    }
    let map: IMap = {};
    for (let i = 1; i <= n; i++) {
        map[i] = {
            data: [],
            distance: 0,
            color: 'white',
        }
    }
    for (let [u, v, w] of times) {
        map[u].data.push([v, w]);
    }
    console.log(map);
    let queue: INode[] = [map[k]];
    let count: number;
    while (queue.length) {
        count = queue.length;
        while (count--) {
            let node = queue.shift()!;
            if (node.color == 'black') continue;
            for (let j = 0; j < node.data.length; j++) {
                let [next, time] = node.data[j];
                queue.push(map[next]);
                if (map[next].color !== 'white' && node.distance + time < map[next].distance) {
                    map[next].distance = node.distance + time;
                }
                if (map[next].color == 'white') {
                    map[next].distance = node.distance + time;
                    map[next].color = 'gray';
                }
                console.log(next, node.distance + time, map[next]);
            }
            node.color = 'black';
        }
    }
    let max = 0;
    for (const key in map) {
        if (map[key].color === 'white' && Number(key) != k) {
            return -1;
        }
        max = Math.max(map[key].distance, max);
    }
    console.log(map);
    return max;
};

const res = networkDelayTime([[1, 2, 1], [2, 3, 7], [1, 3, 4], [2, 1, 2]], 3, 2);
console.log('res', res);